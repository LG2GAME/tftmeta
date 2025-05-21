import SearchBar from "../search-bar/SearchBar";
import SortButtons from "../sort-buttons/SortButtons";
import { ChampionCard } from "@components/features";

import "./ChampionList.scss";

const ChampionList = ({ searchRef, onSearch, sortType, onSort, champions }) => (
  <div className="champion-list">
    <div className="champion-list__settings">
      <SearchBar
        inputRef={searchRef}
        onChange={onSearch}
        placeholder="Wyszukaj po nazwie..."
      />
      <SortButtons
        types={["name", "tier"]}
        currentSort={sortType}
        handleSort={onSort}
      />
    </div>
    <div className="champion-list__champs">
      {champions.map((champion, champIndex) => (
        <ChampionCard
          key={champion.id}
          champion={champion}
          champIndex={champIndex}
          isOnBoard={false}
        />
      ))}
    </div>
  </div>
);

export default ChampionList;
