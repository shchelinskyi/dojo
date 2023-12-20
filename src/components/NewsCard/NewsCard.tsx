import {FC} from 'react';
import {Image} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import s from "./NewsCard.module.scss";
import {Link} from "react-router-dom";

type NewsItem = {
    type: string;
    title: {
        en: string;
        ru: string;
        ua: string;
    };
    date: string;
    category: {
        en: string;
        ru: string;
        ua: string;
    };
    images: string[];
}

type NewsCardTypes = {
    newsItem: NewsItem;
}

const NewsCard: FC<NewsCardTypes> = ({ newsItem}) => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    const {type} = newsItem;

    return (
        <Link className={s.link} to={`news/${type}`}>
            <div className={s.card}>
                <div className={s.imgWrapper}>
                <Image className={s.newsImg} src={newsItem.images[0]}/>
                </div>
                <p className={s.newsDate}>{newsItem.date}</p>
                <h6 className={s.newsTitle}>{t(`title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}</h6>
            </div>
        </Link>
    );
};

export default NewsCard;
