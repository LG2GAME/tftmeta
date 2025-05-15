import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

import { ChampionCard } from "@components/team-builder/champion/champion-card/ChampionCard";
import { ItemCard } from "@components/team-builder/item/item-card/ItemCard";

import {
  moveItem,
  removeItemFromChampion,
} from "@utils/team-builder/board/manageItems";
import {
  moveChampion,
  removeChampion,
  hasChampion,
} from "@utils/team-builder/board/manageChampions";
import { useTeamContext } from "@context/TeamContext";
import {
  loadBoardState,
  saveBoardState,
} from "@utils/team-builder/BoardSessinManager";

import "./TeamBoard.scss";

const BOARD_COLS = [7, 8, 7, 8];
const BLOCKED_HEXES = ["1-0", "3-0"];

const TeamBoard = ({ clearBoard }) => {
  const { manageChampionContext, manageItemContext, setTraits } =
    useTeamContext();

  const [board, setBoard] = useState([]);
  const [championItems, setChampionItems] = useState({});

  useEffect(() => {
    const { champions, items } = loadBoardState();

    if (champions.length > 0) {
      setBoard(champions);
      manageChampionContext(champions);
      setChampionItems(items);
      manageItemContext(items);
    }
  }, [manageChampionContext, manageItemContext]);

  useEffect(() => {
    saveBoardState(board, championItems, null);
  }, [board, championItems]);

  useEffect(() => {
    if (clearBoard) {
      setBoard([]);
      setChampionItems({});
      manageChampionContext([]);
      manageItemContext({});
      saveBoardState([], {}, null);
    }
  }, [clearBoard, manageChampionContext, manageItemContext]);

  const isHexBlocked = (hexIndex) => BLOCKED_HEXES.includes(hexIndex);

  return (
    <div className="board">
      {BOARD_COLS.map((cols, row) => (
        <div key={row} className="board-row">
          {Array.from({ length: cols }).map((_, col) => {
            const hexIndex = `${row}-${col}`;
            const [{ isOver }, dropRef] = useDrop({
              accept: ["champion", "item"],
              drop: (item) => {
                if (!isHexBlocked(hexIndex)) {
                  const championAtHex = board.find(
                    (champ) => champ.hexIndex === hexIndex
                  );

                  if (item.type === "champion") {
                    moveChampion(
                      item,
                      hexIndex,
                      board,
                      setBoard,
                      manageChampionContext,
                      championItems,
                      setChampionItems,
                      manageItemContext
                    );
                  } else if (item.type === "item") {
                    if (championAtHex) {
                      const currentItems =
                        championItems[championAtHex.uuid] || [];

                      if (currentItems.length < 3) {
                        moveItem(
                          item,
                          championAtHex.uuid,
                          championItems,
                          setChampionItems,
                          manageItemContext
                        );
                      }
                    } else {
                      removeItemFromChampion(
                        board.find((champ) => champ.hexIndex === hexIndex).uuid,
                        item.itemUuid,
                        championItems,
                        setChampionItems,
                        manageItemContext
                      );
                    }
                  }
                }
              },
              canDrop: () => !isHexBlocked(hexIndex),
              collect: (monitor) => ({ isOver: monitor.isOver() }),
            });

            return (
              <div
                key={hexIndex}
                className={`board-cell ${
                  isHexBlocked(hexIndex) ? "blocked" : ""
                }${isOver ? "board-cell-hovered" : ""}${
                  hasChampion(hexIndex, board)
                    ? `has-champion-tier-${
                        board.find((champ) => champ.hexIndex === hexIndex).tier
                      }`
                    : ""
                }`}
                draggable={false}
                ref={dropRef}
              >
                {board
                  .filter((champ) => champ.hexIndex === hexIndex)
                  .map((champ) => (
                    <ChampionCard
                      key={champ.uuid}
                      champion={champ}
                      isOnBoard={true}
                      onRemove={() => {
                        removeChampion(
                          champ.uuid,
                          setBoard,
                          manageChampionContext,
                          setTraits,
                          championItems,
                          setChampionItems,
                          manageItemContext
                        );

                        if (board.length !== 0) saveBoardState([], {}, null);
                      }}
                    />
                  ))}
                {hasChampion(hexIndex, board) && (
                  <div className="board-cell__items">
                    {championItems[
                      board.find((champ) => champ.hexIndex === hexIndex).uuid
                    ]?.map((item, itemIndex) => (
                      <ItemCard
                        key={item.itemUuid}
                        item={item}
                        itemIndex={itemIndex}
                        isOnBoard={true}
                        onRemove={() => {
                          removeItemFromChampion(
                            board.find((champ) => champ.hexIndex === hexIndex)
                              .uuid,
                            item.itemUuid,
                            championItems,
                            setChampionItems,
                            manageItemContext
                          );
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TeamBoard;
