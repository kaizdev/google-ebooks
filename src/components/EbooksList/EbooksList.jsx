import React from "react";
import EbookCard from "../EbookCard/EbookCard";
import FlexWrap from "../FlexWrap/FlexWrap";
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

{
    /* <div>
{ebooks.map((ebook, index) => (
    <EbookCard key={index}>
        <h3>Title: {ebook.title}</h3>
        <p>Authors: {ebook.authors}</p>
        <p>Description: {ebook.description}</p>
        <img src={ebook.thumbnail} />
    </EbookCard>
))}
</div> */
}
