import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Principles.module.scss";

type ItemProps = {
    label: string;
    value: string;
}

const Principles = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {principles} = readMoreData;

    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`principles.titleLabel.${currentLanguage}`, (principles.titleLabel as any)[currentLanguage] as string)}:</h4>
            <div className={s.content}>
                {((principles.list as any)[currentLanguage] as ItemProps[]).map((item: ItemProps) => (
                    <div key={item.label}>
                        <h5 className={s.contentTitle}>{item.label}</h5>
                        <p className={s.contentItem}>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Principles;
