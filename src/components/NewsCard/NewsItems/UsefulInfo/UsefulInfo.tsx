import React from "react"
import {Link, useLocation} from "react-router-dom";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import {newsData} from "../../../../utils/news";
import ShareLinks from "../../../ShareLinks/ShareLinks.tsx";
import FollowLinks from "../../../FollowLinks";
import arrow from "../../../../assets/images/news/arrow-back.svg";
import s from "./UsefulInfo.module.scss";
import {useEffect} from "react";

const UsefulInfo = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {usefulInfo: newsItem} = newsData;

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    const {pathname} = useLocation();

    const fullUrl = `https://misakdojo.com${pathname}`

    const paragraphs1 = (newsItem.text3 as any)[currentLanguage] as string
        ? ((newsItem.text3 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => {
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

    const paragraphs2 = (newsItem.text4 as any)[currentLanguage] as string
        ? ((newsItem.text4 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => {
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

    const paragraphs3 = (newsItem.text5 as any)[currentLanguage] as string
        ? ((newsItem.text5 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => {
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
                    <strong>
                    {t(`newsItem.title2.${currentLanguage}`, (newsItem.title2 as any)[currentLanguage] as string)}
                    </strong>
                </p>
                <p className={s.textItem}>
                    <strong>
                        {t(`newsItem.label1.${currentLanguage}`, (newsItem.label1 as any)[currentLanguage] as string)}
                    </strong>
                    {paragraphs1}
                </p>
                <p className={s.textItem}>
                    <strong>
                        {t(`newsItem.label2.${currentLanguage}`, (newsItem.label2 as any)[currentLanguage] as string)}
                    </strong>
                    {paragraphs2}
                </p>
                <p className={s.textItem}>
                    <strong>
                        {t(`newsItem.label3.${currentLanguage}`, (newsItem.label3 as any)[currentLanguage] as string)}
                    </strong>
                    {paragraphs3}
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

export default UsefulInfo;
