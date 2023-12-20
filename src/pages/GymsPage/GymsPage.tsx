import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import ContactGym from "../../components/ContactGym";
import CustomButton from "../../components/CustomButton";
import {Container, Image} from "react-bootstrap";
import num1 from "../../assets/images/gyms/num1.svg";
import num2 from "../../assets/images/gyms/num2.svg";
import num3 from "../../assets/images/gyms/num3.svg";
import signature from "../../assets/images/gyms/signature.svg";
import smile from "../../assets/images/gyms/smile.svg";
import smile2 from "../../assets/images/gyms/smile2.svg";
import scroll from "../../assets/images/gyms/scroll.svg";
import eyes from "../../assets/images/gyms/eyes.svg";
import mondayUA from "../../assets/images/gyms/monday-ua.webp";
import tuesdayUA from "../../assets/images/gyms/tuesday-ua.webp";
import wednesdayUA from "../../assets/images/gyms/wednesday-ua.webp";
import thursdayUA from "../../assets/images/gyms/thursday-ua.webp";
import fridayUA from "../../assets/images/gyms/friday-ua.webp";
import saturdayUA from "../../assets/images/gyms/saturday-ua.webp";
import mondayRU from "../../assets/images/gyms/monday-ru.webp";
import tuesdayRU from "../../assets/images/gyms/tuesday-ru.webp";
import wednesdayRU from "../../assets/images/gyms/wednesday-ru.webp";
import thursdayRU from "../../assets/images/gyms/thursday-ru.webp";
import fridayRU from "../../assets/images/gyms/friday-ru.webp";
import saturdayRU from "../../assets/images/gyms/saturday-ru.webp";
import mondayEN from "../../assets/images/gyms/monday-en.webp";
import tuesdayEN from "../../assets/images/gyms/tuesday-en.webp";
import wednesdayEN from "../../assets/images/gyms/wednesday-en.webp";
import thursdayEN from "../../assets/images/gyms/thursday-en.webp";
import fridayEN from "../../assets/images/gyms/friday-en.webp";
import saturdayEN from "../../assets/images/gyms/saturday-en.webp";
import i18n from "i18next";
import {address} from "../../utils/addressGym.ts";
import cn from "classnames";
import s from "./GymsPage.module.scss";


const GymsPage = () => {
    const [isBlockVisible1, setIsBlockVisible1] = useState(false);
    const [isBlockVisible2, setIsBlockVisible2] = useState(false);
    const [isBlockVisible3, setIsBlockVisible3] = useState(false);

    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const [language, setLanguage] = useState("i18n.language");

    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change]);

    const toggleVisibility = (numBlock:number) => {
        if (numBlock === 1) {
            setIsBlockVisible1(!isBlockVisible1);
        } else if (numBlock === 2) {
            setIsBlockVisible2(!isBlockVisible2);
        } else {
            setIsBlockVisible3(!isBlockVisible3);
        }

    };

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>{t("ourGyms")}</h3>
            <Container className={s.content}>
                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym address={t("gym1")}  addressLink={address.gym1} phone="+38 (099) 042 08 20"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width:"100%"}} onClick={()=>toggleVisibility(1)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible1 })}>
                        <div className={cn(s.item3times, s.order1)}>
                            {language === "ua" && <Image className={s.dayIcon} src={mondayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={mondayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={mondayEN}/>}
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item3times, s.order3)}>
                            <Image className={s.smileIcon} src={smile}/>
                            {language === "ua" && <Image className={s.dayIcon} src={wednesdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={wednesdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={wednesdayEN}/>}
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order5)}>
                            {language === "ua" && <Image className={s.dayIcon} src={fridayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={fridayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={fridayEN}/>}
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group4")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 21:00</li>
                                <p className={s.text}>{t("group5")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order2)}>
                            <Image className={s.signatureIcon} src={signature}/>
                            {language === "ua" && <Image className={s.dayIcon} src={tuesdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={tuesdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={tuesdayEN}/>}
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group4")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 21:00</li>
                                <p className={s.text}>{t("group5")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item3times, s.order4)}>
                            {language === "ua" && <Image className={s.dayIcon} src={thursdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={thursdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={thursdayEN}/>}
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>{t("group3")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>{t("group2")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>{t("group1")}</p>
                            </div>
                        </div>
                    </div>
                    <Image className={s.numIcon} src={num1}/>
                    <div className={s.line}></div>
                </div>

                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym address={t("gym2")}  addressLink={address.gym2} phone="+38 (099) 042 08 20"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width:"100%"}} onClick={()=>toggleVisibility(2)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible2 })}>
                        <div className={cn(s.item2times, s.order1)}>
                            {language === "ua" && <Image className={s.dayIcon} src={mondayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={mondayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={mondayEN}/>}
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order3)}>
                            {language === "ua" && <Image className={s.dayIcon} src={wednesdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={wednesdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={wednesdayEN}/>}
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order5)}>
                            {language === "ua" && <Image className={s.dayIcon} src={fridayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={fridayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={fridayEN}/>}
                            <Image className={s.scrollIcon} src={scroll}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order2)}>
                            {language === "ua" && <Image className={s.dayIcon} src={tuesdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={tuesdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={tuesdayEN}/>}
                            <Image className={s.eyesIcon} src={eyes}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2times, s.order4)}>
                            {language === "ua" && <Image className={s.dayIcon} src={thursdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={thursdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={thursdayEN}/>}
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group6")}</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>{t("group7")}</p>
                            </div>
                        </div>
                    </div>
                    <Image className={s.numIcon} src={num2}/>
                    <div className={s.line}></div>
                </div>

                <div className={s.gymBlock}>
                    <div className={s.gymTitle}>
                        <ContactGym  address={t("gym3")}  addressLink={address.gym3} phone="+38 (093) 726 54 24"/>
                    </div>
                    <div className={s.btnShow}>
                        <CustomButton style={{width:"100%"}} onClick={()=>toggleVisibility(3)}>{t("scheduleSee")}</CustomButton>
                    </div>
                    <div className={cn(s.gymContent, { [s.showContent]: isBlockVisible3 }, s.thirdGym)}>

                        <div className={cn(s.item2timesShot)}>
                            {language === "ua" && <Image className={s.dayIcon} src={tuesdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={tuesdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={tuesdayEN}/>}
                            <div className={s.dataRow}>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group8")}</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>19:00 - 20:30</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2timesShot, s.order3)}>
                            {language === "ua" && <Image className={s.dayIcon} src={saturdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={saturdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={saturdayEN}/>}
                            <div className={s.dataRow}>
                                <li className={s.timeText}>10:00 - 11:00</li>
                                <p className={s.text}>{t("group8")}</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>11:00 - 12:30</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                        <div className={cn(s.item2timesShot)}>
                            <Image className={s.smile2Icon} src={smile2}/>
                            {language === "ua" && <Image className={s.dayIcon} src={thursdayUA}/>}
                            {language === "ru" && <Image className={s.dayIcon} src={thursdayRU}/>}
                            {language === "en" && <Image className={s.dayIcon} src={thursdayEN}/>}
                            <div className={s.dataRow}>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>{t("group8")}</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>19:00 - 20:30</li>
                                <p className={s.text}>{t("group9")}</p>
                            </div>
                        </div>

                    </div>
                    <Image className={s.numIcon} src={num3} style={{bottom: 0}}/>
                </div>

            </Container>
        </div>
    );
};

export default GymsPage;
