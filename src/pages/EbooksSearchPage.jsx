import { useContext } from "react";
import { EbookSearchContext } from "../context/EbooksSearchProvider";
import SearchBar from "../components/SearchBar/SearchBar";
import EbooksLoader from "../containers/EbooksLoader/EbooksLoader";

const EbooksSearchPage = () => {
    const { setEbookSearch } = useContext(EbookSearchContext);

    const ebookSubmit = (value) => {
        console.log("You searched for ebook: ", value);
        setEbookSearch(value);
    };
    return (
        <main>
            <SearchBar formSubmit={ebookSubmit} />
            <EbooksLoader />
        </main>
    );
};

export default EbooksSearchPage;
