import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Glossary.module.scss";

const Glossary = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {glossary} = readMoreData;

    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`glossary.title.${currentLanguage}`, (glossary.title as any)[currentLanguage] as string)}</h4>
            <p className={s.note}>
                {t(`glossary.note.${currentLanguage}`, (glossary.note as any)[currentLanguage] as string)}
            </p>
            <div className={s.content}>
                {((glossary.mainGlossary as any)[currentLanguage] as string[]).map((item: string) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
            <h5 className={s.label}>{(glossary.handsTitle as any)[currentLanguage] as string}:</h5>
            <div className={s.content}>
                {((glossary.hands as any)[currentLanguage] as string[]).map((item: string) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
            <h5 className={s.label}>{(glossary.legsTitle as any)[currentLanguage] as string}:</h5>
            <div className={s.content}>
                {((glossary.legs as any)[currentLanguage] as string[]).map((item: string) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
            <h5 className={s.label}>{(glossary.punchesTitle as any)[currentLanguage] as string}:</h5>
            <div className={s.content}>
                {((glossary.punches as any)[currentLanguage] as string[]).map((item: string) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
            <h5 className={s.label}>{(glossary.blowsTitle as any)[currentLanguage] as string}:</h5>
            <div className={s.content}>
                {((glossary.blows as any)[currentLanguage] as string[]).map((item: string) => (
                    <p className={s.contentItem} key={item}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default Glossary;
