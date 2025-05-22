export const manageTraits = (rawTraits, availableTraits, setTraits) => {
  const getTraitStyle = (trait, count) => {
    const foundTrait = availableTraits.find(
      (availableTrait) => availableTrait.name === trait
    );

    if (!foundTrait) return null;

    const matchingEffect = foundTrait.effects.find(
      (effect) => count >= effect.min && count <= effect.max
    );

    return matchingEffect ? matchingEffect.style : 0;
  };

  const mergedTraits = { ...rawTraits.champions };

  Object.entries(rawTraits.items).forEach(([trait, count]) => {
    mergedTraits[trait] = (mergedTraits[trait] || 0) + count;
  });

  const newTraits = Object.entries(mergedTraits)
    .map(([trait, count]) => ({
      name: trait,
      count,
      style: getTraitStyle(trait, count),
    }))
    .sort((a, b) =>
      b.style !== a.style ? b.style - a.style : b.count - a.count
    );

  setTraits(newTraits);
};

export const manageChampionContext = (newBoard, setRawTraits) => {
  const traitCounts = {};
  const uniqueChampions = new Set();

  newBoard.forEach((champion) => {
    if (uniqueChampions.has(champion.name)) return;
    uniqueChampions.add(champion.name);

    champion.traits.forEach((trait) => {
      traitCounts[trait] = (traitCounts[trait] || 0) + 1;
    });
  });

  setRawTraits((prevTraits) => ({
    champions: traitCounts,
    items: prevTraits.items,
  }));
};

export const manageItemContext = (
  newItemsSet,
  setRawTraits,
  setItems,
  setTraitByItem
) => {
  const itemCounts = {};
  let addedEmblems = [];

  if (
    newItemsSet.length === 0 ||
    newItemsSet.every((itemsList) => Object.keys(itemsList).length === 0)
  ) {
    setRawTraits((prevTraits) => ({
      champions: prevTraits.champions,
      items: {},
    }));
  }

  newItemsSet.forEach((itemsList) => {
    Object.values(itemsList).forEach((itemsArray) => {
      if (Array.isArray(itemsArray)) {
        itemsArray.forEach((item) => {
          if (item.composition.length === 0)
            itemCounts[item.apiName] = (itemCounts[item.apiName] || 0) + 1;

          if (item.id === "emblem") addedEmblems.push(item);

          item.composition.forEach((component) => {
            itemCounts[component] = (itemCounts[component] || 0) + 1;
          });
        });
      }
    });
  });

  if (addedEmblems.length > 0) {
    setTraitByItem(addedEmblems);
  }

  setItems(
    Object.entries(itemCounts).map(([name, count]) => ({ name, count }))
  );
};

export const setTraitByItem = (emblems, availableTraits, setRawTraits) => {
  if (!availableTraits || availableTraits.length === 0) {
    return;
  }

  const emblemCounts = {};

  emblems.forEach((emblem) => {
    if (!emblem.name) return;

    const foundItemTrait = availableTraits.find((availableTrait) =>
      emblem.name.includes(availableTrait.name)
    );

    if (foundItemTrait) {
      emblemCounts[foundItemTrait.name] =
        (emblemCounts[foundItemTrait.name] || 0) + 1;
    }
  });

  setRawTraits((prevTraits) => {
    const updatedItems = { ...prevTraits.items, ...emblemCounts };
    return {
      champions: prevTraits.champions,
      items: updatedItems,
    };
  });
};
