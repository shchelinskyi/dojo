import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./DojoCun.module.scss";


const DojoCun = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {dojoKun} = readMoreData;
    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`dojoKun.subTitle.${currentLanguage}`, (dojoKun.subTitle as any)[currentLanguage] as string)}:</h4>
            <div className={s.content}>
                {((dojoKun.list as any)[currentLanguage] as string[]).map((item: string) => (
                    <div key={item}>
                        <h5 className={s.contentTitle}>{(dojoKun.swear as any)[currentLanguage] as string}:</h5>
                        <p className={s.contentItem}>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DojoCun;
