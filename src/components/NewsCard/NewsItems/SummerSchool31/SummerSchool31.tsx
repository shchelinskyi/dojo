import {Link, useLocation} from "react-router-dom";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import FollowLinks from "../../../FollowLinks";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./SummerSchool31.module.scss";
import {useEffect} from "react";

const SummerSchool31 = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {summerSchool31: newsItem} = newsData;
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    const fullUrl = `https://misakdojo.com${pathname}`

    const paragraphs1 = (newsItem.list as any)[currentLanguage] as string
        ? ((newsItem.list as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
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
                <Image src={newsItem.images[1]} className={s.img}/>
                <p className={s.textItem}>
                    {t(`newsItem.text2.${currentLanguage}`, (newsItem.text2 as any)[currentLanguage] as string)}
                </p>
                <p className={s.textItem}>
                    {paragraphs1}
                </p>
                <p className={s.textItem}>
                    {t(`newsItem.text3.${currentLanguage}`, (newsItem.text3 as any)[currentLanguage] as string)}
                </p>
                <Image src={newsItem.images[2]} className={s.img}/>
                <Image src={newsItem.images[3]} className={s.img}/>
                <Image src={newsItem.images[4]} className={s.img}/>
                <Image src={newsItem.images[5]} className={s.img}/>
                <Image src={newsItem.images[6]} className={s.img}/>
                <Image src={newsItem.images[7]} className={s.img}/>
                <Image src={newsItem.images[8]} className={s.img}/>
                <p className={s.textItem}>
                    {t(`newsItem.text4.${currentLanguage}`, (newsItem.text4 as any)[currentLanguage] as string)}
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

export default SummerSchool31;
