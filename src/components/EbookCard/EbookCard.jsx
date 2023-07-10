import style from "./EbookCard.module.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent/ModalContent";

const EbookCard = ({ ebook }) => {
    const { title, authors, description, thumbnail } = ebook;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEbook, setSelectedEbook] = useState(null);

    const openModal = (ebook) => {
        setSelectedEbook(ebook);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <article className={style.card}>
            <div className={style.book_info}>
                <div className={style.container_img}>
                    {thumbnail && <img src={thumbnail} />}
                </div>

                <div className={style.container_text}>
                    <h4 className={style.title}>{title}</h4>
                    <p className={style.author}>
                        <span>Authors:</span> {authors}
                    </p>
                    <p className={style.description}>
                        <span>Description:</span> {description}
                    </p>
                </div>
            </div>
            <button
                className={style.button_more_info}
                onClick={() => openModal(ebook)}
            >
                More info
            </button>

            {isModalOpen &&
                createPortal(
                    <ModalContent
                        ebook={selectedEbook}
                        closeModal={closeModal}
                    />,
                    document.body
                )}
        </article>
    );
};

export default EbookCard;
