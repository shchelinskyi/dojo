import {Link, useLocation} from "react-router-dom";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import FollowLinks from "../../../FollowLinks";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./Championship2018.module.scss";
import {useEffect} from "react";

const Championship2018 = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {championship2018: newsItem} = newsData;

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    const {pathname} = useLocation();

    const fullUrl = `https://misakdojo.com${pathname}`


    return (
        <div>
            <div className={s.content}>
                <div className={s.head}>
                    <Link to="/misak-dojo/" >
                        <Image src={arrow} className={s.icon}/>
                    </Link>
                    <div className={s.publishedItem}>{t("published")}: <span>{newsItem.date}</span></div>
                </div>
                <h4 className={s.title}>{t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}</h4>
                <Image src={newsItem.images[0]} className={s.img}/>
                <p className={s.textItem}>
                    {t(`newsItem.text1.${currentLanguage}`, (newsItem.text1 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text2.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, (newsItem.text3 as any)[currentLanguage] as string)}
                    <a  className={s.link} href="https://kyokushinkarate.news/news_ukraine/4235-poedinki-sredi-muzhchin-75" target="_blank">
                        https://kyokushinkarate.news/news_ukraine/4235-poedinki-sredi-muzhchin-75
                    </a>
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.osu.${currentLanguage}`, (newsItem.osu as any)[currentLanguage] as string)}
                </p>
            </div>
            <div className={s.socialContent}>
                <ShareLinks url={fullUrl}
                            quote={t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}/>
                <FollowLinks/>
            </div>
        </div>
    );
};

export default Championship2018;
