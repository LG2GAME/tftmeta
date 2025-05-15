import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const fetchCompositions = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/tierlist/last`);
    const data = res.data;

    return data.map((comp) => ({
      name: comp.mainTrait,
      avgPlace: Math.round(comp.averagePlacement),
      units: comp.unitIds.map((unit) => {
        const matchingItem = comp.unitItems.find(
          (unitItem) => unitItem.unitId === unit && unitItem.items.length > 0
        );

        return {
          unitName: unit,
          unitItems: matchingItem ? matchingItem.items : [],
        };
      }),
    }));
  } catch (err) {
    console.error("Błąd podczas pobierania kompozycji:", err);
    return err;
  }
};
