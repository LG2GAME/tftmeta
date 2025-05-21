import { useEffect, useState } from "react";
import { fetchTftData } from "@api";
import { extractTraits } from "@utils";

const currentSet = 14;

export const useTraits = () => {
  const [tftTraits, setTftTraits] = useState([]);

  useEffect(() => {
    const fetchTraits = async () => {
      const db = await fetchTftData();
      const traits = extractTraits(db, currentSet);

      setTftTraits(traits);
    };

    fetchTraits();
  }, []);

  return tftTraits;
};
