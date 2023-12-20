import { useEffect, useState, ChangeEvent } from "react";
import {useTranslation} from "react-i18next";
import {Image} from "react-bootstrap";
import iconSelect from "../../assets/images/main/select-flag.webp";
import s from "./CustomSelect.module.scss";


const CustomSelect = () => {
    const {i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'ua');

    useEffect(() => {
        setSelectedLanguage(i18n.language || 'ua');
    }, [i18n.language]);


    const changeLanguage = (language:string) => {
        i18n.changeLanguage(language);
    }

    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
    };

    return (
        <div className={s.selectContainer}>
            <select value={selectedLanguage} className={s.selectBox} onChange={handleLanguageChange}>
                <option value="ua">UA</option>
                <option value="ru">RU</option>
                <option value="en">ENG</option>
            </select>
            <div className={s.iconContainer} style={{ right: selectedLanguage === "en" ? "7px" : "15px" }}>
                <Image className={s.selectIcon} src={iconSelect}/>
            </div>
        </div>
    );
};

export default CustomSelect;
