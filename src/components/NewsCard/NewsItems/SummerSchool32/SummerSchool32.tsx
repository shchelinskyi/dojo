import React from "react"
import {Link, useLocation} from "react-router-dom";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import FollowLinks from "../../../FollowLinks";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./SummerSchool32.module.scss";
import {useEffect} from "react";

const SummerSchool32 = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {summerSchool32: newsItem} = newsData;

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    const {pathname} = useLocation();

    const fullUrl = `https://misakdojo.com${pathname}`

    const paragraphs1 = (newsItem.text1 as any)[currentLanguage] as string
        ? ((newsItem.text1 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => {
            const match = paragraph.match(/<strong>(.*?)<\/strong>/);

            const formattedParagraph = match
                ? (
                    <div key={index} className={s.textItem}>
                        {paragraph.split(match[0]).map((text, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <strong>{match[1]}</strong>}
                                {text}
                            </React.Fragment>
                        ))}
                    </div>
                )
                : (
                    <div key={index} className={s.textItem}>
                        {paragraph}
                    </div>
                );

            return formattedParagraph;
        })
        : null;

    const paragraphs2 = (newsItem.text2 as any)[currentLanguage] as string
        ? ((newsItem.text2 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => {
            const match = paragraph.match(/<strong>(.*?)<\/strong>/);

            const formattedParagraph = match
                ? (
                    <div key={index} className={s.textItem}>
                        {paragraph.split(match[0]).map((text, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <strong>{match[1]}</strong>}
                                {text}
                            </React.Fragment>
                        ))}
                    </div>
                )
                : (
                    <div key={index} className={s.textItem}>
                        {paragraph}
                    </div>
                );

            return formattedParagraph;
        })
        : null;

    const paragraphs3 = (newsItem.text3 as any)[currentLanguage] as string
        ? ((newsItem.text3 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
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
                <div className={s.block}>
                    {paragraphs1}
                </div>
                <Image src={newsItem.images[1]} className={s.img}/>
                <div className={s.block}>
                    {paragraphs2}
                </div>
                <Image src={newsItem.images[2]} className={s.img}/>
                <div className={s.block}>
                    {paragraphs3}
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

export default SummerSchool32;
