import {Link, useLocation} from "react-router-dom";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import FollowLinks from "../../../FollowLinks";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./KarateDay.module.scss";
import {useEffect} from "react";

const KarateDay = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {karateDay: newsItem} = newsData;

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    const {pathname} = useLocation();

    const fullUrl = `https://misakdojo.com${pathname}`

    const paragraphs1 = (newsItem.text as any)[currentLanguage] as string
        ? ((newsItem.text as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <div key={index} className={s.textItem}>
                {paragraph}
            </div>
        ))
        : null;

    return (
        <div>
            <div className={s.content}>
                <div className={s.head}>
                    <Link to="/dojo/" >
                        <Image src={arrow} className={s.icon}/>
                    </Link>
                    <div className={s.publishedItem}>{t("published")}: <span>{newsItem.date}</span></div>
                </div>
                <h4 className={s.title}>{t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}</h4>
                <Image src={newsItem.images[0]} className={s.img}/>
                <div>
                    {paragraphs1}
                </div>
            </div>
            <div className={s.socialContent}>
                <ShareLinks url={fullUrl}
                            quote={t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}/>
                <FollowLinks/>
            </div>
        </div>
    );
};

export default KarateDay;

