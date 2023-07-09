import React, { useContext, useEffect, useState } from "react";
import { EbookSearchContext } from "../../context/EbooksSearchProvider";
import { getEbooksBySearch } from "../../services/ebooks-services";
import EbooksList from "../../components/EbooksList/EbooksList";
import style from "../../global.module.scss";

const EbooksLoader = () => {
    const [fetchSate, setFetchState] = useState("");

    const { ebookSearch } = useContext(EbookSearchContext);

    const [ebooks, setEbooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("This effect happens");

        if (!ebookSearch) {
            setFetchState("");
            return;
        }

        setFetchState("Loading");
        getEbooksBySearch(ebookSearch)
            .then((ebooks) => {
                setFetchState("Success");
                setEbooks(ebooks);
            })
            .catch((error) => {
                setFetchState("Error");
                setError(error);
            });
    }, [ebookSearch]);

    return (
        <>
            {fetchSate === "Loading" && ebookSearch && (
                <p className={style.loading_text}>
                    Showing eBook results for: {ebookSearch}
                </p>
            )}
            {fetchSate === "Success" && <EbooksList ebooks={ebooks} />}
            {fetchSate === "Error" && <p>{error.message}</p>}
        </>
    );
};

export default EbooksLoader;
