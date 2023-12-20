import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Rules.module.scss";


const Rules = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {rules, osu} = readMoreData;

    const paragraphs1 = (rules.text1 as any)[currentLanguage] as string
        ? ((rules.text1 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    const paragraphs2 = (rules.text2 as any)[currentLanguage] as string
        ? ((rules.text2 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    const paragraphs3 = (rules.text3 as any)[currentLanguage] as string
        ? ((rules.text3 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    const paragraphs4 = (rules.text4 as any)[currentLanguage] as string
        ? ((rules.text4 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <li key={index} className={s.contentItem}>
                {paragraph}
            </li>
        ))
        : null;
    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`rules.title.${currentLanguage}`,(rules.title as any)[currentLanguage] as string)}:</h4>
            <h5 className={s.contentTitle}>
                {t(`rules.before.${currentLanguage}`, (rules.before as any)[currentLanguage] as string)}
            </h5>
            <ol className={s.list}>
                {paragraphs1}
            </ol>
            <h5 className={s.contentTitle}>
                {t(`rules.during.${currentLanguage}`, (rules.during as any)[currentLanguage] as string)}
            </h5>
            <ol className={s.list}>
                {paragraphs2}
            </ol>
            <h5 className={s.contentTitle}>
                {t(`rules.prohibition.${currentLanguage}`, (rules.prohibition as any)[currentLanguage] as string)}
            </h5>
            <ol className={s.list}>
                {paragraphs3}
            </ol>
            <h5 className={s.contentTitle}>
                {t(`rules.after.${currentLanguage}`, (rules.after as any)[currentLanguage] as string)}
            </h5>
            <ol className={s.list}>
                {paragraphs4}
            </ol>
            <div className={s.contentItem} style={{margin:"40px 0"}}>
                {t(`osu.${currentLanguage}`, (osu as any)[currentLanguage] as string)}
            </div>
        </div>
    );
};

export default Rules;
