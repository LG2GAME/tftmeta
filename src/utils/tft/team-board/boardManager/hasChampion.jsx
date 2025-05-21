export const hasChampion = (hexIndex, board) =>
  board.some((champ) => champ.hexIndex === hexIndex);
