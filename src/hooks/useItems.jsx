import { useEffect, useState } from "react";
import { fetchTftData } from "@api";
import { extractItems } from "@utils";

const currentSet = 14;

const itemBlacklist = ["debug", "unusable", "sentinelswarm"];

export const useItems = () => {
  const [tftItems, setTftItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const db = await fetchTftData();
      const items = extractItems(db, 13, itemBlacklist);

      setTftItems(items);
    };

    fetchItems();
  }, []);

  return tftItems;
};
