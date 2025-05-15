import { useRef, useState } from "react";

export const useSearch = () => {
  const searchChampRef = useRef(null);
  const [searchChamp, setSearchChamp] = useState("");
  const handleChampSearch = () =>
    setSearchChamp(searchChampRef.current?.value || "");

  const searchItemRef = useRef(null);
  const [searchItem, setSearchItem] = useState("");
  const handleItemSearch = () =>
    setSearchItem(searchItemRef.current?.value || "");

  return {
    searchChampRef,
    searchChamp,
    handleChampSearch,
    searchItemRef,
    searchItem,
    handleItemSearch,
  };
};
