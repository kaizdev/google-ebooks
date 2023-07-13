import React from "react";
import EbookCard from "../EbookCard/EbookCard";
import style from "./EbooksList.module.scss";

const EbooksList = ({ ebooks }) => {
    return (
        <section className={style.list}>
            {ebooks.map((ebook, index) => {
                return <EbookCard key={index} ebook={ebook} />;
            })}
        </section>
    );
};

export default EbooksList;
