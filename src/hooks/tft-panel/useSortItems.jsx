export const useSortItems = (items, searchItem, sortItemType) => {
  const filteredAndSortedItems = items
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase()) &&
        (!sortItemType ||
          itemId(item).includes(sortItemType) ||
          item.id === "half-item")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  function itemId(item) {
    let categories = [];
    if (item.name.toLowerCase().includes("emblem")) categories.push("emblem");
    else if (item.composition.length > 0) categories.push("craftable");
    else if (item.icon.toLowerCase().includes("artifact"))
      categories.push("artifact");

    if (item.id === "half-item") categories.push("half-item");
    return categories.length > 0 ? categories : ["other"];
  }

  return filteredAndSortedItems;
};
