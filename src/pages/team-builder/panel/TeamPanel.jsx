import { useState } from "react";

import { ChampionCard } from "@components/team-builder/champion/champion-card/ChampionCard";
import { ItemCard } from "@components/team-builder/item/item-card/ItemCard";

import {
  useChampions,
  useItems,
} from "@utils/team-builder/tft-data/useTFTData";
import { useSearch } from "@utils/team-builder/panel/useSearch";
import { useSortChamps } from "@utils/team-builder/panel/useSortChamps";
import { useSortItems } from "@utils/team-builder/panel/useSortItems";

import "./TeamPanel.scss";

import { Icons } from "@assets/icons";

const SortButtons = ({ types, currentSort, handleSort, itemClass }) => {
  return (
    <div
      className={`team-panel__settings-sort${
        itemClass ? ` team-panel__settings-sort${itemClass}` : ""
      }`}
    >
      {types.map((type) => (
        <button
          key={type}
          className={`team-panel__settings-sort-item team-panel__settings-sort-item${itemClass} ${
            currentSort === type ? "team-panel__settings-sort-item--active" : ""
          }`}
          onClick={() => handleSort(type)}
        >
          {type === "name" ? "A-Z" : type === "tier" ? <Icons.coin /> : type}
        </button>
      ))}
    </div>
  );
};

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
  const filteredAndSortedChampions = useSortChamps(
    champions,
    searchChamp,
    sortChampType
  );

  const [sortItemType, setSortItemType] = useState("craftable");
  const handleSortItems = (type) =>
    setSortItemType(sortItemType === type ? null : type);
  const filteredAndSortedItems = useSortItems(items, searchItem, sortItemType);

  return (
    <section className="team-panel">
      <div className="team-panel__champs">
        <div className="team-panel__settings">
          <div className="team-panel__settings-search-bar">
            <Icons.search size={20} />
            <input
              type="search"
              placeholder="Wyszukaj po nazwie..."
              ref={searchChampRef}
              onChange={handleChampSearch}
            />
          </div>
          <SortButtons
            types={["name", "tier"]}
            currentSort={sortChampType}
            handleSort={handleSortChamps}
          />
        </div>
        <div className="team-panel__champs-list">
          {filteredAndSortedChampions.map((champion, champIndex) => (
            <ChampionCard
              key={champion.id}
              champion={champion}
              champIndex={champIndex}
              isOnBoard={false}
            />
          ))}
        </div>
      </div>
      <div className="team-panel__items">
        <div className="team-panel__settings team-panel__settings--items">
          <div className="team-panel__settings-search-bar team-panel__settings-search-bar--items">
            <Icons.search size={20} />
            <input
              type="search"
              placeholder="Wyszukaj po nazwie..."
              ref={searchItemRef}
              onChange={handleItemSearch}
            />
          </div>
          <SortButtons
            types={["craftable", "emblem", "artifact", "other"]}
            currentSort={sortItemType}
            handleSort={handleSortItems}
            itemClass="--items"
          />
        </div>
        <div className="team-panel__items-half">
          {sortItemType === "craftable" &&
            filteredAndSortedItems
              .filter((item) => item.id === "half-item")
              .map((item, itemIndex) => (
                <ItemCard
                  key={itemIndex}
                  item={item}
                  itemIndex={itemIndex}
                  isHalfItem
                />
              ))}
        </div>
        <div className="team-panel__items-full">
          {filteredAndSortedItems
            .filter((item) => item.id !== "half-item")
            .map((item, itemIndex) => (
              <ItemCard
                key={itemIndex}
                item={item}
                itemIndex={itemIndex}
                isHalfItem={false}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPanel;
