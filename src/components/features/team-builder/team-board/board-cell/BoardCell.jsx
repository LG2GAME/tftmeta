import { useDrop } from "react-dnd";
import { ChampionCard, ItemCard } from "@components/features";
import {
  moveItem,
  removeItemFromChampion,
  moveChampion,
  removeChampion,
  hasChampion,
} from "@utils";
import "./boardCell.scss";

const BoardCell = ({
  hexIndex,
  board,
  setBoard,
  championItems,
  setChampionItems,
  manageChampionContext,
  manageItemContext,
  setTraits,
  isHexBlocked,
}) => {
  const championAtHex = board.find((champ) => champ.hexIndex === hexIndex);

  const [{ isOver }, dropRef] = useDrop({
    accept: ["champion", "item"],
    drop: (item) => {
      if (!isHexBlocked(hexIndex)) {
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
            const currentItems = championItems[championAtHex.uuid] || [];
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
              board.find((champ) => champ.hexIndex === hexIndex)?.uuid,
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
      className={`board-cell ${isHexBlocked(hexIndex) ? "blocked" : ""}${
        isOver ? "board-cell-hovered" : ""
      }${
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
                  board.find((champ) => champ.hexIndex === hexIndex).uuid,
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
};

export default BoardCell;
