import { useEffect, useState } from "react";

import { fetchPatchnotes } from "@api";
import { Article } from "@components/features";

import "./patchnotes.scss";

function Patchnotes() {
  const [patchNotes, setPatchNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPatchNotes = async () => {
      try {
        const notes = await fetchPatchnotes(8);
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

export default Patchnotes;
