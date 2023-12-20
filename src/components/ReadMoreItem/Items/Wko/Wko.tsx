import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {readMoreData} from "../../../../utils/readMore";
import {Image} from "react-bootstrap";
import ua11 from "../../../../assets/images/readMore/ua11.webp";
import ua22 from "../../../../assets/images/readMore/ua22.webp";
import ru11 from "../../../../assets/images/readMore/ru11.webp";
import ru22 from "../../../../assets/images/readMore/ru22.webp";
import en11 from "../../../../assets/images/readMore/en11.webp";
import en22 from "../../../../assets/images/readMore/en22.webp";
import s from "./Wko.module.scss";

const Wko = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {wko} = readMoreData;


    return (
        <div className={s.container}>
            <h4 className={s.title}>
                {t(`wko.subTitle.${currentLanguage}`, (wko.subTitle as any)[currentLanguage] as string)}
            </h4>
            {currentLanguage === 'ua' &&
                <div className={s.imageBlock}>
                    <Image className={s.img} src={ua11}/>
                    <Image className={s.img} src={ua22}/>
                </div>
            }
            {currentLanguage === 'ru' &&
                <div className={s.imageBlock}>
                    <Image className={s.img} src={ru11}/>
                    <Image className={s.img} src={ru22}/>
                </div>
            }
            {currentLanguage === 'en' &&
                <div className={s.imageBlock}>
                    <Image className={s.img} src={en11}/>
                    <Image className={s.img} src={en22}/>
                </div>
            }
            <h5 className={s.contentTitle}>
                {t(`wko.label1.${currentLanguage}`, (wko.label1 as any)[currentLanguage] as string)}
            </h5>
            <p className={s.contentItem}>
                {t(`wko.text1.${currentLanguage}`, (wko.text1 as any)[currentLanguage] as string)}
            </p>
            <h5 className={s.contentTitle}>
                {t(`wko.label2.${currentLanguage}`, (wko.label2 as any)[currentLanguage] as string)}
            </h5>
            <p className={s.contentItem}>
                {t(`wko.text2.${currentLanguage}`, (wko.text2 as any)[currentLanguage] as string)}
            </p>

        </div>
    );
};

export default Wko;
