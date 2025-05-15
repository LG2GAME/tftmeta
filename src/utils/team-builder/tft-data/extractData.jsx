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

export const extractItems = (db, currentSet, blacklist) => {
  if (!db || !db.items) return [];

  const setPattern = new RegExp(`(TFT_Set|Set)${currentSet}\\b`, "i");
  const set14Pattern = new RegExp(`(TFT_Set|Set)14\\b`, "i");

  const replaceVariables = (description, effects) => {
    return description.replace(
      /@(\w+)(\*([\d.]+))?@/g,
      (match, varName, _, multiplier) => {
        if (effects && effects[varName] !== undefined) {
          let value = effects[varName];
          if (multiplier) {
            value *= parseFloat(multiplier);
          }
          return Number.isInteger(value)
            ? value
            : parseFloat(value.toFixed(2)).toString();
        }
        return null;
      }
    );
  };

  const allComponents = new Set(
    db.items.flatMap((item) => item.composition || [])
  );

  return db.items
    .filter((item) => {
      const isEmblem = item.name?.toLowerCase().includes("emblem");
      const isItem =
        item.apiName.toLowerCase().startsWith("tft_item") || isEmblem;

      const hasValidIconForEmblem =
        isEmblem && item.icon && set14Pattern.test(item.icon);

      const hasValidIconForNonEmblem =
        !isEmblem && item.icon && setPattern.test(item.icon);

      const hasValidName = Boolean(item.name);

      const isBlacklisted = blacklist.some((black) =>
        item.icon?.toLowerCase().includes(black)
      );

      return (
        isItem &&
        (hasValidIconForEmblem || hasValidIconForNonEmblem) &&
        hasValidName &&
        !isBlacklisted
      );
    })
    .map((item) => ({
      type: "item",
      name: item.name,
      apiName: item.apiName,
      composition: item.composition,
      desc: replaceVariables(item.desc, item.effects),
      id: item.name.toLowerCase().includes("emblem")
        ? "emblem"
        : item.icon.toLowerCase().includes("artifact")
        ? "artifact"
        : item.composition.length > 0
        ? "craftable"
        : allComponents.has(item.apiName)
        ? "half-item"
        : "unique",
      icon: item.icon
        ? `https://raw.communitydragon.org/latest/game/${item.icon
            .toLowerCase()
            .replace(".tex", ".png")}`
        : null,
    }));
};

export const extractAugments = (db, currentSet) => {
  return db.items
    .filter(
      (augment) =>
        augment.apiName.toLowerCase().startsWith(`tft${currentSet}_augment`) &&
        augment.apiName !== "TFT14_Augment_Mob_Splash"
    )
    .map((augment) => ({
      type: "augment",
      name: augment.name,
      apiName: augment.apiName,
      desc: augment.desc,
      icon: augment.icon
        ? `https://raw.communitydragon.org/latest/game/${augment.icon
            .toLowerCase()
            .replace(".tex", ".png")}`
        : null,
    }));
};
