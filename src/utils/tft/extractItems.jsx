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
