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

      if (updatedItems[fromChampionUuid].length === 0) {
        delete updatedItems[fromChampionUuid];
      }
    }

    const newItem = { ...item, itemUuid: item.itemUuid || crypto.randomUUID() };
    updatedItems[toChampionUuid] = [
      ...(updatedItems[toChampionUuid] || []),
      newItem,
    ];

    if (updatedItems[toChampionUuid].length === 0) {
      delete updatedItems[toChampionUuid];
    }

    manageItemContext(updatedItems);
    return updatedItems;
  });
};
