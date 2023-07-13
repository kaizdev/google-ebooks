import { createContext, useState } from "react";

export const EbookSearchContext = createContext(null);

const EbooksSearchProvider = ({ children }) => {
    const [ebookSearch, setEbookSearch] = useState("");
    return (
        <EbookSearchContext.Provider value={{ ebookSearch, setEbookSearch }}>
            {children}
        </EbookSearchContext.Provider>
    );
};

export default EbooksSearchProvider;
