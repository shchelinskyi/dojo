import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Biography.module.scss";

const Biography = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {biography} = readMoreData;

    const paragraphs1 = (biography.text1 as any)[currentLanguage] as string
        ? ((biography.text1 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    const paragraphs2 = (biography.text2 as any)[currentLanguage] as string
        ? ((biography.text2 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    const paragraphs3 = (biography.text3 as any)[currentLanguage] as string
        ? ((biography.text3 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs4 = (biography.text4 as any)[currentLanguage] as string
        ? ((biography.text4 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;
    const paragraphs5 = (biography.text5 as any)[currentLanguage] as string
        ? ((biography.text5 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    const paragraphs6 = (biography.text6 as any)[currentLanguage] as string
        ? ((biography.text6 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`biography.title.${currentLanguage}`, (biography.title as any)[currentLanguage] as string)}:</h4>
            {paragraphs1}
            <h5 className={s.contentTitle}>{t(`biography.title.${currentLanguage}`, (biography.label1 as any)[currentLanguage] as string)}</h5>
            {paragraphs2}
            <h5 className={s.contentTitle}>{t(`biography.title.${currentLanguage}`, (biography.label2 as any)[currentLanguage] as string)}</h5>
            {paragraphs3}
            <h5 className={s.contentTitle}>{t(`biography.title.${currentLanguage}`, (biography.label3 as any)[currentLanguage] as string)}</h5>
            {paragraphs4}
            <ul className={s.list}>
                {paragraphs5}
            </ul>
            {paragraphs6}
        </div>
    );
};

export default Biography;
