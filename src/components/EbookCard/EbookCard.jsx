import style from "./EbookCard.module.scss";

const EbookCard = ({ ebook }) => {
    const { title, authors, description, thumbnail } = ebook;

    return (
        <article className={style.card}>
            <div className={style.book_info}>
                <div className={style.container_img}>
                    {thumbnail && <img src={thumbnail} />}
                </div>

                <div className={style.container_text}>
                    <h4>{title}</h4>
                    <p className={style.author}>
                        <span>Authors:</span> {authors}
                    </p>
                    <p className={style.description}>
                        <span>Description:</span> {description}
                    </p>
                </div>
            </div>
            <button className={style.button_more_info}>Go to eBook</button>
        </article>
    );
};

export default EbookCard;

// import React from "react";

// const EbookCard = ({ children }) => {
//     return <div>{children}</div>;
// };

// export default EbookCard;
