export const extractChampions = (db, currentSet, whitelist, blacklist) => {
  if (!db || !db.sets?.[currentSet]?.champions) return [];

  return db.sets[currentSet].champions
    .map((champion) => ({
      ...champion,
      cost: champion.cost > 6 ? 1 : champion.cost,
    }))
    .filter((champion) => {
      const isWhitelisted = whitelist.some((item) =>
        champion.apiName?.includes(item)
      );
      const isBlacklisted = blacklist.some((item) =>
        champion.apiName?.includes(item)
      );
      return isWhitelisted && !isBlacklisted;
    })
    .toSorted((a, b) =>
      a.cost !== b.cost ? a.cost - b.cost : a.name.localeCompare(b.name)
    )
    .map((character) => ({
      type: "champion",
      tier: character.cost,
      name: character.name,
      id: character.apiName,
      role: character.role,
      traits: character.traits,
      icon: character.tileIcon
        ? `https://raw.communitydragon.org/latest/game/${character.tileIcon
            .toLowerCase()
            .replace(".tex", ".png")}`
        : null,
    }));
};
