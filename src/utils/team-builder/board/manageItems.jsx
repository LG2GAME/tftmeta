export const moveItem = (
  item,
  toChampionUuid,
  championItems,
  setChampionItems,
  manageItemContext
) => {
  setChampionItems((prevItems) => {
    const updatedItems = { ...prevItems };

    let fromChampionUuid = null;
    for (const champUuid in updatedItems) {
      if (
        updatedItems[champUuid].some(
          (existingItem) => existingItem.itemUuid === item.itemUuid
        )
      ) {
        fromChampionUuid = champUuid;
        break;
      }
    }

    if (fromChampionUuid) {
      updatedItems[fromChampionUuid] = updatedItems[fromChampionUuid].filter(
        (existingItem) => existingItem.itemUuid !== item.itemUuid
      );

      // Sprawdź, czy po usunięciu przedmiotu nie ma już przedmiotów przypisanych do tej postaci
      if (updatedItems[fromChampionUuid].length === 0) {
        delete updatedItems[fromChampionUuid];
      }
    }

    const newItem = { ...item, itemUuid: item.itemUuid || crypto.randomUUID() };
    updatedItems[toChampionUuid] = [
      ...(updatedItems[toChampionUuid] || []),
      newItem,
    ];

    // Jeśli nie ma już przedmiotów na danej postaci, usuń ją z listy
    if (updatedItems[toChampionUuid].length === 0) {
      delete updatedItems[toChampionUuid];
    }

    manageItemContext(updatedItems);
    return updatedItems;
  });
};

export const removeItemFromChampion = (
  championUuid,
  itemUuid,
  championItems,
  setChampionItems,
  manageItemContext
) => {
  setChampionItems((prevItems) => {
    const updatedItems = { ...prevItems };

    if (updatedItems[championUuid]) {
      updatedItems[championUuid] = updatedItems[championUuid].filter(
        (existingItem) => existingItem.itemUuid !== itemUuid
      );

      if (updatedItems[championUuid].length === 0) {
        delete updatedItems[championUuid];
      }
    }

    manageItemContext(updatedItems);
    return updatedItems;
  });
};
