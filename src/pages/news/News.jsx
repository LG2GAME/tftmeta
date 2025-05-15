import { useEffect, useState } from "react";

import { fetchPatchNotes } from "@utils/patch-notes/FetchPatchNotes";
import { Article } from "@components/common/article/Article";

import "./News.scss";

function News() {
  const [patchNotes, setPatchNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPatchNotes = async () => {
      try {
        const notes = await fetchPatchNotes(8);
        setPatchNotes(notes);
      } catch (error) {
        console.error("Failed to fetch patch notes:", error);
        setError("Nie udało się pobrać patch notes.");
      }
    };

    getPatchNotes();
  }, []);

  return (
    <section className="news">
      {patchNotes.length > 0 ? (
        patchNotes
          .slice(0, 3)
          .map((patchData, index) => (
            <Article key={index} patchData={patchData} />
          ))
      ) : (
        <div>Brak dostępnych patch notes</div>
      )}
    </section>
  );
}

export default News;
