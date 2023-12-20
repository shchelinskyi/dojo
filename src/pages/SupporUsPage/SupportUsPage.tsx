import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Image} from "react-bootstrap";
import spiral from "../../assets/images/support/spiral-support.svg";
import heartY from "../../assets/images/support/heart-y.svg";
import heartB from "../../assets/images/support/heart-b.svg";
import hands from "../../assets/images/support/hands.svg";
import supportUA from "../../assets/images/support/support-ua.webp";
import supportRU from "../../assets/images/support/support-ru.webp";
import supportEN from "../../assets/images/support/support-en.webp";
import btnLabel from "../../assets/images/support/btn-label.svg";
import finger from "../../assets/images/support/finger-up.svg";
import s from "./SupportUsPage.module.scss";
import CustomButton from "../../components/CustomButton";



const SupportUsPage = () => {

    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const [language, setLanguage] = useState("i18n.language");

    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change]);

    return (
        <div className={s.wrapper}>
            <div className={s.contentWrapper}>
                <div className={s.content}>
                    <span>{t("support1")}</span>
                    <Image src={hands} className={s.handsIcon}/>
                    <span> {t("support2")}</span><br/>
                    <Image src={heartY} className={s.heartIcon}/>
                    <Image src={heartB} className={s.heartIcon}/>
                    <span>{t("support3")}</span>
                </div>
                <div className={s.supportBlock}>
                    <Image src={spiral} className={s.spiralImg}/>
                    {language === "ua" && <Image src={supportUA} className={s.supportLabel}/>}
                    {language === "ru" && <Image src={supportRU} className={s.supportLabel}/>}
                    {language === "en" && <Image src={supportEN} className={s.supportLabel}/>}
                    <a href="https://www.buymeacoffee.com/misakdojo" target="_blank">
                        <CustomButton>
                            <Image src={btnLabel} className={s.btnLabel}/>
                        </CustomButton>
                    </a>
                    {language === "ua" && <div className={s.fingerBlock}>
                        <Image src={finger} className={s.fingerImg}/>
                        <span>{t("click")}</span>
                    </div>}
                    {language === "ru" && <div className={s.fingerBlock}>
                        <Image src={finger} className={s.fingerImg}/>
                        <span>{t("click")}</span>
                    </div>}
                    {language === "en" && <div className={s.fingerBlockEN}>
                        <Image src={finger} className={s.fingerImg}/>
                        <span>{t("click")}</span>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default SupportUsPage;
