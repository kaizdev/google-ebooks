import React from "react";
import EbooksSearchProvider from "./context/EbooksSearchProvider";
import EbooksSearchPage from "./pages/EbooksSearchPage";
import style from "./global.module.scss";

const App = () => {
    const ebookSubmit = (value) =>
        console.log("You searched for ebook: ", value);

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
