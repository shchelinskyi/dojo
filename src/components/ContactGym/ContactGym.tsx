import {FC} from 'react';
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import location from "../../assets/images/gyms/location.svg";
import telIcon from "../../assets/images/gyms/phone.svg";
import clip from "../../assets/images/gyms/clip.png";

import s from "./ContactGym.module.scss";

type ContactGymProps = {
    address:string;
    addressLink: string;
    phone: string;
}

const ContactGym:FC<ContactGymProps> = ({address, addressLink, phone}) => {
    const formattedPhone = phone.replace(/[\s()]/g, '');
    const phoneLink = `tel:${formattedPhone}`;
    const { t } = useTranslation();

    return (
        <div className={s.block}>
            <a href={addressLink} className={s.contactItem} target="_blank">
                <Image className={s.locationIcon} src={location}/>
                <p className={s.text}>{t("city")}, <br className={s.wrap}/>{address}</p>
            </a>
            <a href={phoneLink} className={s.contactItem} target="_blank">
                <Image className={s.phoneIcon} src={telIcon}/>
                <p className={s.text}>{phone}</p>
            </a>
            <Image className={s.clipIcon} src={clip}/>
        </div>
    );
};

export default ContactGym;
