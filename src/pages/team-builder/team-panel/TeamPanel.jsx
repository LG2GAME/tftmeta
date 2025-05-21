import { useState } from "react";
import {
  useChampions,
  useItems,
  useSearch,
  useSortChampions,
  useSortItems,
} from "@hooks";

import { ChampionList, ItemList } from "@components/features";

import "./TeamPanel.scss";

function TeamPanel() {
  const champions = useChampions();
  const items = useItems();

  const {
    searchChampRef,
    searchChamp,
    handleChampSearch,
    searchItemRef,
    searchItem,
    handleItemSearch,
  } = useSearch();

  const [sortChampType, setSortChampType] = useState("tier");
  const handleSortChamps = (type) =>
    setSortChampType(sortChampType === type ? null : type);
  const filteredChamps = useSortChampions(
    champions,
    searchChamp,
    sortChampType
  );

  const [sortItemType, setSortItemType] = useState("craftable");
  const handleSortItems = (type) =>
    setSortItemType(sortItemType === type ? null : type);
  const filteredItems = useSortItems(items, searchItem, sortItemType);

  return (
    <section className="team-panel">
      <ChampionList
        searchRef={searchChampRef}
        onSearch={handleChampSearch}
        sortType={sortChampType}
        onSort={handleSortChamps}
        champions={filteredChamps}
      />
      <ItemList
        searchRef={searchItemRef}
        onSearch={handleItemSearch}
        sortType={sortItemType}
        onSort={handleSortItems}
        items={filteredItems}
      />
    </section>
  );
}

export default TeamPanel;
