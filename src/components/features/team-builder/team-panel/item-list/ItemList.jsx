import SearchBar from "../search-bar/SearchBar";
import SortButtons from "../sort-buttons/SortButtons";
import { ItemCard } from "@components/features";

import "./ItemList.scss";

const ItemList = ({ searchRef, onSearch, sortType, onSort, items }) => (
  <div className="item-list">
    <div className="item-list__settings">
      <SearchBar
        inputRef={searchRef}
        onChange={onSearch}
        placeholder="Wyszukaj po nazwie..."
        className="item-list__search-bar--items"
      />
      <SortButtons
        types={["craftable", "emblem", "artifact", "other"]}
        currentSort={sortType}
        handleSort={onSort}
        itemClass="--items"
      />
    </div>
    <div className="item-list__half">
      {sortType === "craftable" &&
        items
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
    <div className="item-list__full">
      {items
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
);

export default ItemList;
