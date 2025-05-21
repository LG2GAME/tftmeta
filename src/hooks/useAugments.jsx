import { useEffect, useState } from "react";
import { fetchTftData } from "@api";
import { extractAugments } from "@utils";

const currentSet = 14;

export const useAugments = () => {
  const [tftAugments, setTftAugments] = useState([]);

  useEffect(() => {
    const fetchAugments = async () => {
      const db = await fetchTftData();
      const augments = extractAugments(db, currentSet);

      setTftAugments(augments);
    };

    fetchAugments();
  }, []);

  return tftAugments;
};
