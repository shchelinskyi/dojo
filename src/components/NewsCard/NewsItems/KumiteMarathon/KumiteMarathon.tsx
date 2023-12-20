import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import FollowLinks from "../../../FollowLinks";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./KumiteMarathon.module.scss";
import {useEffect} from "react";

const KumiteMarathon = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {kumiteMarathon: newsItem} = newsData;

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
                <Image src={newsItem.images[1]} className={s.img}/>
                <Image src={newsItem.images[2]} className={s.img}/>
                <Image src={newsItem.images[3]} className={s.img}/>
                <p className={s.textItem}>
                    {t(`newsItem.text2.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                </p>
                <Image src={newsItem.images[4]} className={s.img}/>
                <Image src={newsItem.images[5]} className={s.img}/>
                <Image src={newsItem.images[6]} className={s.img}/>
                <Image src={newsItem.images[7]} className={s.img}/>
                <p className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {newsItem.text4}
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

export default KumiteMarathon;
