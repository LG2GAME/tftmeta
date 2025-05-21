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
