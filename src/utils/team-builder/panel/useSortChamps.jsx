export const useSortChamps = (champions, searchChamp, sortChampType) => {
  const filteredAndSortedChampions = champions
    .filter((champ) =>
      champ.name.toLowerCase().includes(searchChamp.toLowerCase())
    )
    .sort((a, b) =>
      sortChampType === "name"
        ? a.name.localeCompare(b.name)
        : sortChampType === "tier"
        ? a.tier - b.tier
        : 0
    );

  return filteredAndSortedChampions;
};
