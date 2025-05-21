import { icons } from "@assets/icons";

import "./SortButtons.scss";

const SortButtons = ({ types, currentSort, handleSort, itemClass }) => {
  return (
    <div
      className={`sort-buttons${itemClass ? ` sort-buttons${itemClass}` : ""}`}
    >
      {types.map((type) => (
        <button
          key={type}
          className={`sort-buttons__item sort-buttons__item${itemClass || ""} ${
            currentSort === type ? "sort-buttons__item--active" : ""
          }`}
          onClick={() => handleSort(type)}
        >
          {type === "name" ? (
            "A-Z"
          ) : type === "tier" ? (
            <img src={icons.coinIcon} alt="" width={24} />
          ) : (
            type
          )}
        </button>
      ))}
    </div>
  );
};

export default SortButtons;
