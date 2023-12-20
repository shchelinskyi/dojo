import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Belts.module.scss";


const Belts = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {belts} = readMoreData;

    const paragraphs1 = (belts.text1 as any)[currentLanguage] as string
        ? ((belts.text1 as any)[currentLanguage] as string).split('\n').map((paragraph:string, index: number) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs2 = (belts.text2 as any)[currentLanguage] as string
        ? ((belts.text2 as any)[currentLanguage] as string).split('\n').map((paragraph:string, index: number) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs3 = (belts.text3 as any)[currentLanguage] as string
        ? ((belts.text3 as any)[currentLanguage] as string).split('\n').map((paragraph:string, index: number) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs4 = (belts.text4 as any)[currentLanguage] as string
        ? ((belts.text4 as any)[currentLanguage] as string).split('\n').map((paragraph:string, index: number) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs5 = (belts.text5 as any)[currentLanguage] as string
        ? ((belts.text5 as any)[currentLanguage] as string).split('\n').map((paragraph:string, index: number) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs6 = (belts.text6 as any)[currentLanguage] as string
        ? ((belts.text6 as any)[currentLanguage] as string).split('\n').map((paragraph:string, index: number) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;
    const paragraphs7 = (belts.text7 as any)[currentLanguage] as string
        ? ((belts.text7 as any)[currentLanguage] as string).split('\n').map((paragraph:string, index: number) => (
            <div key={index} className={s.contentItem}>
                {paragraph}
            </div>
        ))
        : null;


    return (
        <div className={s.container}>
            <p className={s.note}>{t(`belts.note.${currentLanguage}`,(belts.note as any)[currentLanguage] as string)}</p>
            <h4 className={s.title}>{t(`belts.title.${currentLanguage}`,(belts.title as any)[currentLanguage] as string)}:</h4>
            <h5 className={s.contentTitle}>
                {t(`belts.label1.${currentLanguage}`, (belts.label1 as any)[currentLanguage] as string)}
            </h5>
            {paragraphs1}
            <h5 className={s.contentTitle}>
                {t(`belts.label2.${currentLanguage}`, (belts.label2 as any)[currentLanguage] as string)}
            </h5>
            {paragraphs2}
            <h5 className={s.contentTitle}>
                {t(`belts.label3.${currentLanguage}`, (belts.label3 as any)[currentLanguage] as string)}
            </h5>
            {paragraphs3}
            <h5 className={s.contentTitle}>
                {t(`belts.label4.${currentLanguage}`, (belts.label4 as any)[currentLanguage] as string)}
            </h5>
            {paragraphs4}
            <h5 className={s.contentTitle}>
                {t(`belts.label5.${currentLanguage}`, (belts.label5 as any)[currentLanguage] as string)}
            </h5>
            {paragraphs5}
            <h5 className={s.contentTitle}>
                {t(`belts.label6.${currentLanguage}`, (belts.label6 as any)[currentLanguage] as string)}
            </h5>
            {paragraphs6}
            <h5 className={s.contentTitle}>
                {t(`belts.label7.${currentLanguage}`, (belts.label7 as any)[currentLanguage] as string)}
            </h5>
            {paragraphs7}
        </div>
    );
};

export default Belts;
