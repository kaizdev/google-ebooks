import { useState } from "react";
import style from "./SearchBar.module.scss";

const SearchBar = ({ formSubmit }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        formSubmit(searchInput);
        setSearchInput("");
    };

    const onSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                placeholder="Search by title/author/category"
                value={searchInput}
                onChange={onSearchInputChange}
                required
            />
            <button>Search eBooks</button>
        </form>
    );
};

export default SearchBar;
