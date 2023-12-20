import {ReactNode, FC, useState} from 'react';
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import plus from "../../assets/images/readMore/plus.webp";
import ReadMoreModalItem from "../ReadMoreModalItem";
import s from "./ReadMoreItem.module.scss";

type ReadMoreItem = {
    item: {
        title: {
            en: string;
            ru: string;
            ua: string;
        }
    },
    children: ReactNode;
}

const ReadMoreItem: FC<ReadMoreItem> = ({item, children}) => {

    const [isModalOpened, setIsModalOpened] = useState(false);
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    const handleOpen = () => {
        document.body.style.overflowY = 'hidden';
        setIsModalOpened(true);
    }

    const handleClose = () => {
        document.body.style.overflowY = 'auto';
        setIsModalOpened(false);
    }

    return (
        <>
            <div key={item.title.en} className={s.link} onClick={handleOpen}>
                <div className={s.linkTitle}>{t(`title.${currentLanguage}`, (item.title as any)[currentLanguage] as string)}</div>
                <Image className={s.iconPlus} src={plus}/>
            </div>
            {isModalOpened && <ReadMoreModalItem onClose={handleClose}>
                {children}
            </ReadMoreModalItem>}
        </>
    );
};

export default ReadMoreItem;
