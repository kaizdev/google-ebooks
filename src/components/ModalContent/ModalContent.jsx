import React from "react";
import style from "./ModalContent.module.scss";

const ModalContent = ({ ebook, closeModal }) => {
    const {
        title,
        authors,
        description,
        thumbnail,
        publishedDate,
        pageCount,
        averageRating,
    } = ebook;
    return (
        <div className={style.modal}>
            <div className={style.modal_container}>
                <img src={thumbnail} alt="book thumbnail" />
                <h2>{title}</h2>

                <p>
                    <strong>Authors: </strong> {authors}
                </p>

                {publishedDate && (
                    <p>
                        <strong>Published: </strong>
                        {publishedDate}
                    </p>
                )}

                <p className={style.description}>
                    <strong>Description: </strong> {description}
                </p>

                {pageCount > 0 && (
                    <p>
                        <strong>Pages: </strong>
                        {pageCount}
                    </p>
                )}

                {averageRating && (
                    <p>
                        <strong>Average Rating: </strong>
                        {averageRating}
                    </p>
                )}

                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default ModalContent;
