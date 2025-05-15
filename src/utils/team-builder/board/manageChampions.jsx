export const moveChampion = (
  item,
  newHexIndex,
  board,
  setBoard,
  manageChampionContext,
  championItems,
  setChampionItems,
  manageItemContext,
) => {
  setBoard((prevBoard) => {
    let updatedBoard = [...prevBoard];

    const existingChampionIndex = updatedBoard.findIndex(
      (champ) => champ.hexIndex === newHexIndex,
    );

    const isSwap = updatedBoard.some((champ) => champ.uuid === item.uuid);

    if (existingChampionIndex !== -1) {
      const existingChampion = updatedBoard[existingChampionIndex];

      if (!isSwap && setChampionItems) {
        setChampionItems((prevItems) => {
          const updatedItems = { ...prevItems };
          delete updatedItems[existingChampion.uuid];
          manageItemContext(updatedItems);
          return updatedItems;
        });

        removeChampion(
          existingChampion.uuid,
          setBoard,
          manageChampionContext,
          championItems,
          setChampionItems,
          manageItemContext,
        );
      }

      updatedBoard[existingChampionIndex] = {
        ...existingChampion,
        hexIndex: item.hexIndex,
      };

      updatedBoard = updatedBoard.filter((champ) => champ.uuid !== item.uuid);
      updatedBoard.push({
        ...item,
        hexIndex: newHexIndex,
        uuid: item.uuid || crypto.randomUUID(),
      });
    } else {
      const movingChampionIndex = updatedBoard.findIndex(
        (champ) => champ.uuid === item.uuid,
      );

      if (movingChampionIndex !== -1) {
        updatedBoard[movingChampionIndex].hexIndex = newHexIndex;
      } else {
        updatedBoard.push({
          ...item,
          hexIndex: newHexIndex,
          uuid: item.uuid || crypto.randomUUID(),
        });
      }
    }

    manageChampionContext(updatedBoard);
    return updatedBoard;
  });
};

export const removeChampion = (
  championUuid,
  setBoard,
  manageChampionContext,
  setTraits,
  championItems,
  setChampionItems,
  manageItemContext,
) => {
  setBoard((prevBoard) => {
    const updatedBoard = prevBoard.filter(
      (champ) => champ.uuid !== championUuid,
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

export const hasChampion = (hexIndex, board) =>
  board.some((champ) => champ.hexIndex === hexIndex);
