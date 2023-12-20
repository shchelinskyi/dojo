import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {readMoreData} from "../../../../utils/readMore";
import s from "./Exam.module.scss";

const Exam = () => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const {exam} = readMoreData;

    const paragraphs1 = (exam.text1 as any)[currentLanguage] as string
        ? ((exam.text1 as any)[currentLanguage] as string).split('\n').map((paragraph: string, index: number) => (
            <p key={index} className={s.contentItem}>
                {paragraph}
            </p>
        ))
        : null;

    return (
        <div className={s.container}>
            <h4 className={s.title}>{t(`exam.title.${currentLanguage}`,(exam.title as any)[currentLanguage] as string)}:</h4>
            {paragraphs1}
        </div>
    );
};

export default Exam;
