import React from "react";
import EbooksSearchProvider from "./context/EbooksSearchProvider";
import EbooksSearchPage from "./pages/EbooksSearchPage";

const App = () => {
    return (
        <>
            <h2>Google eBooks </h2>
            <h4>Search for your favourite books below</h4>
            <EbooksSearchProvider>
                <EbooksSearchPage />
            </EbooksSearchProvider>
        </>
    );
};

export default App;
