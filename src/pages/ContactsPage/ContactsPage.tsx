import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import ContactGymSocial from "../../components/ContactGymSocial";
import FormBlock from "../../components/FormBlock";
import i18n from "i18next";
import {address} from "../../utils/addressGym.ts";
import ua from "../../assets/images/contacts/ua.webp";
import waitUA from "../../assets/images/contacts/wait-ua.webp";
import waitRU from "../../assets/images/contacts/wait-ru.webp";
import waitEN from "../../assets/images/contacts/wait-en.webp";
import s from "./ContactsPage.module.scss";

const ContactsPage = () => {
    const currentLanguage = i18n.language || 'ua';
    const [language, setLanguage] = useState("i18n.language");
    const {t} = useTranslation();
    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change]);

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h3 className={s.contactsTitle}>{t("ourContacts")}</h3>
                <div className={s.content}>
                    <ContactGymSocial
                        address={t("gymFull1")}
                        addressLink={address.gym1}
                        email="MisakDojo@gmail.com"
                        phone="+38 (099) 042 08 20"
                        underground={t("underground1")}
                        socialLinks={
                            {
                                instagramLink: "https://instagram.com/misakdojo",
                                facebookLink: "https://facebook.com/misakdojo",
                                youtubeLink: "https://www.youtube.com/@misakdojo/featured",
                                telegramLink: "https://t.me/misakarzum"
                            }
                        }
                    />

                    <ContactGymSocial
                        address={t("gymFull2")}
                        addressLink={address.gym2}
                        email="MisakDojo@gmail.com"
                        phone="+38 (099) 042 08 20"
                        underground={t("underground2")}
                        socialLinks={
                            {
                                instagramLink: "https://instagram.com/misakdojo/",
                                facebookLink: "https://facebook.com/misakdojo/",
                                youtubeLink: "https://www.youtube.com/@misakdojo/featured",
                                telegramLink: "https://t.me/misakarzum"
                            }
                        }
                    />

                    <ContactGymSocial
                        address={t("gymFull3")}
                        addressLink={address.gym3}
                        phone="+38 (093) 726 54 24"
                        underground={t("underground3")}
                        socialLinks={
                            {
                                instagramLink: "https://www.instagram.com/karate.kostuk/",
                            }
                        }
                    />
                    <div className={s.line}></div>
                    <FormBlock/>
                    <div className={s.logoContainer}>
                        {language === "ua" && <Image className={s.logo} src={waitUA}/>}
                        {language === "ru" && <Image className={s.logo} src={waitRU}/>}
                        {language === "en" && <Image className={s.logo} src={waitEN}/>}
                        <Image className={s.uaIcon} src={ua}/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContactsPage;
