const BOARD_KEY = "boardState";

export const saveBoardState = (champions, items, augments) => {
  const currentState = loadBoardState();

  const newState = {
    champions: champions ?? currentState.champions,
    items: items ?? currentState.items,
    augments: augments ?? currentState.augments,
  };

  sessionStorage.setItem(BOARD_KEY, JSON.stringify(newState));
};

export const loadBoardState = () => {
  const state = sessionStorage.getItem(BOARD_KEY);

  return state
    ? JSON.parse(state)
    : { champions: [], items: {}, augments: [null, null, null] };
};
