import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Search as SearchIcon } from "../../Icons";
import { Search } from "./styles";

function SearchBar({ closeFloatingMenu = () => {}, ...props }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const doSearch = () => {
    const term = searchTerm.trim();
    const encodedTerm = encodeURIComponent(term);

    if (encodedTerm) {
      navigate(`/?q=${encodedTerm}`);
      closeFloatingMenu();
    } else {
      navigate("/");
    }
  };

  const handleSearchSubmit = (event) => {
    if (event.key === "Enter") {
      doSearch();
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchTerm = url.searchParams.get("q");

    setSearchTerm(searchTerm ?? "");
  }, [window?.location?.href]);

  return (
    <Search
      {...props}
      Icon={SearchIcon}
      name="search"
      placeholder="Busque por pratos ou ingredientes"
      value={searchTerm}
      onChange={handleSearchTermChange}
      onKeyDown={handleSearchSubmit}
      onBlur={doSearch}
    />
  );
}

export default SearchBar;
