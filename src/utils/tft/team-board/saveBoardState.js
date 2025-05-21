import { BOARD_KEY } from "./config";
import { loadBoardState } from "./loadBoardState";

export const saveBoardState = (champions, items, augments) => {
  const currentState = loadBoardState();

  const newState = {
    champions: champions ?? currentState.champions,
    items: items ?? currentState.items,
    augments: augments ?? currentState.augments,
  };

  sessionStorage.setItem(BOARD_KEY, JSON.stringify(newState));
};
