import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const fetchPatchNotes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/patch-notes/last/20`);

    return res.data.map((patch) => ({
      header: `Opis patcha ${patch.version} TeamFight Tactics`,
      content:
        patch.sections && patch.sections.length > 0
          ? patch.sections[0].content
          : "Brak treści",
    }));
  } catch (err) {
    console.error("Błąd podczas pobierania patch notes:", err);
    return err;
  }
};
