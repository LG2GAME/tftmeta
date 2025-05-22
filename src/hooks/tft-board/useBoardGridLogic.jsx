import { useEffect, useState } from "react";
import { saveBoardState, loadBoardState } from "@utils";
import { useTeamContext } from "@context";

const BLOCKED_HEXES = ["1-0", "3-0"];

export function useBoardGridLogic({ clearBoard }) {
  const { manageChampionContext, manageItemContext, setTraits } =
    useTeamContext() || {
      manageChampionContext: () => {},
      manageItemContext: () => {},
      setTraits: () => {},
    };

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
  }, []);

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
  }, [clearBoard]);

  const isHexBlocked = (hexIndex) => BLOCKED_HEXES.includes(hexIndex);

  return {
    board,
    setBoard,
    championItems,
    setChampionItems,
    manageChampionContext,
    manageItemContext,
    setTraits,
    isHexBlocked,
  };
}
