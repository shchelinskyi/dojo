import { useLocation, Link } from 'react-router-dom';
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import FollowLinks from "../../../FollowLinks";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./CupIrpin.module.scss";
import {useEffect} from "react";

const CupIrpin = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {cupIrpin: newsItem} = newsData;
    const {pathname} = useLocation();

    const fullUrl = `https://misakdojo.com${pathname}`

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);


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
                <div>
                    <div className={s.textItem}>
                        <p className={s.textItem}>
                            {t(`newsItem.text2.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                        </p>
                        {((newsItem.wins1 as any)[currentLanguage] as string[]).map((item: string) => (
                            <p key={item} className={s.textItem}>{item}</p>))}
                    </div>
                </div>
                <Image src={newsItem.images[2]} className={s.img}/>
                <p className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, (newsItem.text3 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.osu.${currentLanguage}`, (newsItem.osu as any)[currentLanguage] as string)}
                </p>
            </div>
            <div className={s.socialContent}>
                <ShareLinks url={fullUrl} quote={t(`newsItem.title.${currentLanguage}`, (newsItem.title as any)[currentLanguage] as string)}/>
                <FollowLinks/>
            </div>
        </div>
    );
};

export default CupIrpin;
