import {CSSProperties, FC, useState} from 'react';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Image} from "react-bootstrap";
import GalleryCardModal from "./GalleryCardModal";
import s from "./GalleryCard.module.scss";

type GalleryCardTypes = {
    galleryItem: {
        title: {
            en: string,
            ru: string,
            ua: string
        },
        date: string;
        images: string[]
    },
    styles?: CSSProperties;
}

const GalleryCard: FC<GalleryCardTypes> = ({galleryItem, styles}) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    const handleOpen = () => {
        document.body.style.overflowY = 'hidden';
        setIsModalOpened(true);
    }

    const handleClose = () => {
        document.body.style.overflowY = 'scroll';
        setIsModalOpened(false);
    }

    return (
        <>
            <div className={s.card} onClick={handleOpen} style={styles}>
                <div className={s.imgWrapper}>
                <Image className={s.cardImg} src={galleryItem.images[0]}/>
                </div>
                <p className={s.cardDate}>{galleryItem.date}</p>
                <h6 className={s.cardTitle}>{t(`title.${currentLanguage}`, (galleryItem.title as any)[currentLanguage] as string)}</h6>
            </div>
            {isModalOpened && <GalleryCardModal images={galleryItem.images} onClose={handleClose}/>}
        </>

    );
};

export default GalleryCard;
