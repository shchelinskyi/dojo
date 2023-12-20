import s from "./TheFooter.module.scss";
import {Image} from "react-bootstrap";
import visaIcon from "../../assets/images/footer/visa.svg";
import masterCard from "../../assets/images/footer/mastercard.svg";
import cn from "classnames"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const TheFooter = () => {
    const {t} = useTranslation();
    return (
        <div className={s.wrapper}>
            <div className={s.contentBlock}>
                <div className={cn(s.footerContent, s.order2)}>
                    <div className={cn(s.column, s.links)}>
                        <p className={s.textContent}>{t("design")}: <span className={s.link}>Maria Oliynyk</span></p>
                        <p className={s.textContent}>{t("development")}: <a href="https://www.linkedin.com/in/shchelinskyi/" className={s.link} target="_blank">Artem Shchelinskyi</a></p>
                    </div>
                </div>
                <div className={cn(s.footerContent, s.order3)}>
                    <div className={cn(s.column, s.rightBlock)}>
                        <p className={s.textRightReserve}>© Misak Dojo, 2023</p>
                        <p className={s.textRightReserve}>{t("rights")}</p>
                    </div>
                </div>
                <div className={cn(s.footerContent, s.order1)}>
                    <div className={s.column}>
                        <div className={s.iconBlock}>
                            <Image className={s.visaIcon} src={visaIcon}/>
                            <Image className={s.masterCardIcon} src={masterCard}/>
                        </div>
                        <Link className={s.link2} to="contract-offer">
                            <p className={s.textRightReserve}>{t("agreement")}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheFooter;
