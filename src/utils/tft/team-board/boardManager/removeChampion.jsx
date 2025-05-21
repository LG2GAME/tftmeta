export const removeChampion = (
  championUuid,
  setBoard,
  manageChampionContext,
  setTraits,
  championItems,
  setChampionItems,
  manageItemContext
) => {
  setBoard((prevBoard) => {
    const updatedBoard = prevBoard.filter(
      (champ) => champ.uuid !== championUuid
    );

    manageChampionContext(updatedBoard);

    setChampionItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[championUuid];
      manageItemContext(updatedItems);
      return updatedItems;
    });

    return updatedBoard;
  });
};
