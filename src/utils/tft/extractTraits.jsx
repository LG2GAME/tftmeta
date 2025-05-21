export const extractTraits = (db, currentSet) => {
  if (!db || !db.sets?.[currentSet]?.traits) return [];

  return db.sets[currentSet].traits.map((trait) => ({
    id: trait.apiName,
    name: trait.name,
    effects: trait.effects.map((effect) => ({
      max: effect.maxUnits,
      min: effect.minUnits,
      style: effect.style,
    })),
    icon: trait.icon
      ? `https://raw.communitydragon.org/latest/game/${trait.icon
          .toLowerCase()
          .replace(".tex", ".png")}`
      : null,
  }));
};
