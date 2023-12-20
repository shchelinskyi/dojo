import { useLocation, Link } from 'react-router-dom';
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import FollowLinks from "../../../FollowLinks";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./FighterCup.module.scss";
import {useEffect} from "react";

const FighterCup = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {fighterCup: newsItem} = newsData;
    const {pathname} = useLocation();

    const fullUrl = `https://misakdojo.com${pathname}`

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    const paragraphs1 = (newsItem.text11 as any)[currentLanguage] as string
        ? ((newsItem.text11 as any)[currentLanguage] as string).split('\n').map((paragraph:string, index:number) => (
            <div key={index} className={s.textItem}>
                {paragraph}
            </div>
        ))
        : null;



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

                <div>
                    <div className={s.textItem}>
                        <p className={s.textItem}>
                            {t(`newsItem.text2.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                        </p>
                        {((newsItem.wins1 as any)[currentLanguage] as string[]).map((item: string) => (
                            <p key={item} className={s.textItem}>{item}</p>))}
                    </div>
                </div>
                <Image src={newsItem.images[1]} className={s.img}/>
                <p className={s.textItem}>
                    {t(`newsItem.text4.${currentLanguage}`, (newsItem.text4 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text5.${currentLanguage}`, (newsItem.text5 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text6.${currentLanguage}`, (newsItem.text6 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text7.${currentLanguage}`, (newsItem.text7 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text8.${currentLanguage}`, (newsItem.text8 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text9.${currentLanguage}`, (newsItem.text9 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text10.${currentLanguage}`, (newsItem.text10 as any)[currentLanguage] as string)}
                </p>
                <div className={s.block}>
                    {paragraphs1}
                </div>
                <p className={s.textItem}>
                    {t(`newsItem.text12.${currentLanguage}`, (newsItem.text12 as any)[currentLanguage] as string)}
                </p>
                <Image src={newsItem.images[2]} className={s.img}/>
                <p className={s.textItem}>
                    {t(`newsItem.text13.${currentLanguage}`, (newsItem.text13 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text14.${currentLanguage}`, (newsItem.text14 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text15.${currentLanguage}`, (newsItem.text15 as any)[currentLanguage] as string)}
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

export default FighterCup;
