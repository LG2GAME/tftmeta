import { BOARD_KEY } from "./config";

export const loadBoardState = () => {
  const state = sessionStorage.getItem(BOARD_KEY);

  return state
    ? JSON.parse(state)
    : { champions: [], items: {}, augments: [null, null, null] };
};
