import { icons } from "@assets/icons";

import "./SearchBar.scss";

const SearchBar = ({ inputRef, onChange, placeholder, className }) => (
  <div className={`search-bar ${className || ""}`}>
    <img src={icons.searchIcon} alt="" width={20} />
    <input
      type="search"
      placeholder={placeholder}
      ref={inputRef}
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
