import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Container, Image} from "react-bootstrap";
import members from "../../assets/images/about/members.webp";
import heart from "../../assets/images/about/heart.webp";
import handL from "../../assets/images/about/handL.webp";
import handR from "../../assets/images/about/handR.webp";
import person from "../../assets/images/about/person.webp";
import stars from "../../assets/images/about/stars.webp";
import stars2 from "../../assets/images/about/stars2.webp";
import about1 from "../../assets/images/about/about1.webp";
import about12 from "../../assets/images/about/about12.webp";
import about13 from "../../assets/images/about/about13.webp";
import about14 from "../../assets/images/about/about14.webp";
import about2 from "../../assets/images/about/about2.webp";
import smiles from "../../assets/images/about/smiles.webp";
import line from "../../assets/images/about/line.webp";
import line2 from "../../assets/images/about/line2.webp";
import chimano from "../../assets/images/about/chimano.webp";
import cup from "../../assets/images/about/cup.webp";
import karate from "../../assets/video/karate.mp4";
import titleTeamUA from "../../assets/images/about/title-team-ua.webp";
import titleTeamRU from "../../assets/images/about/title-team-ru.webp";
import titleTeamEN from "../../assets/images/about/title-team-en.webp";
import s from "./AboutPage.module.scss";
import cn from "classnames";

const AboutPage = () => {

    const { t } = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const [language, setLanguage] = useState("i18n.language");

    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change]);

    return (
        <>
            <Container>
                <Container>
                    <div className={s.sloganWrapper}>
                        {t('slogan1')}
                        <Image className={s.membersIcon} src={members}/>
                        {t('slogan2')}
                        <span className={cn(s.slogan, s.dojo)}>{t('slogan3')}</span>
                        <Image className={s.heartIcon} src={heart}/>
                        {t('slogan4')}
                        <span>
                            <Image className={s.handLIcon} src={handL}/>
                            <Image className={s.personIcon} src={person}/>
                            <Image className={s.handRIcon} src={handR}/>
                        </span>
                    </div>
                </Container>

                <div className={s.aboutWrapper}>
                    <div className={s.aboutContent}>
                        <h3 className={s.aboutTitle}>{t('aboutUs')}</h3>
                        <p className={s.mainText} style={{marginBottom: "40px"}}>
                            {t("aboutText1")}
                        </p>
                        <p className={s.mainText}>
                            {t("aboutText2")}
                        </p>
                        <Image className={s.starsImg} src={stars}/>
                        <Image className={s.starsImg2} src={stars2}/>
                    </div>
                    <div className={s.imageWrapper}>
                        <Image className={s.aboutImg1} src={about1}/>
                        <Image className={s.aboutImg12} src={about12}/>
                        <Image className={s.aboutImg13} src={about13}/>
                        <Image className={s.aboutImg2} src={about2}/>
                        <Image className={s.aboutImg14} src={about14}/>
                    </div>
                </div>

                <Container style={{marginTop: "18px", marginBottom: "170px"}}>
                    <div className={s.totalContainer}>

                        <div className={s.totalItem}>
                            <div className={s.numberWrapper}>
                                <h3 className={s.totalNumber}>70</h3>
                                <Image className={s.smilesIcon} src={smiles}/>
                            </div>
                            <div className={s.totalItemTitle}>
                                <h4 className={s.subTitle}>{t("whoTraining1")}</h4>
                                <p className={s.subMain}>{t("whoTraining2")} <br className={s.wrap}/> {t("whoTraining3")}</p>
                            </div>

                        </div>

                        <Image src={line} className={s.line}/>
                        <Image src={line2} className={s.line2}/>

                        <div className={s.totalItem}>
                            <div className={s.numberWrapper}>
                                <h3 className={s.totalNumber}>4</h3>
                                <Image className={s.chimanoIcon} src={chimano}/>
                            </div>
                            <div className={s.totalItemTitle}>
                                <h4 className={s.subTitle}>{t("howMany1")}</h4>
                                <p className={s.subMain}>{t("howMany2")} <br className={s.wrap}/> {t("howMany3")}</p>
                            </div>

                        </div>

                        <Image src={line} className={s.line}/>
                        <Image src={line2} className={s.line2}/>

                        <div className={s.totalItem}>
                            <div className={s.numberWrapper}>
                                <h3 className={s.totalNumber}>3</h3>
                                <Image className={s.cupIcon} src={cup}/>
                            </div>
                            <div className={s.totalItemTitle}>
                                <h4 className={s.subTitle}>{t("winners1")}</h4>
                                <p className={s.subMain}>{t("winners2")} <br className={s.wrap}/> {t("winners3")}</p>
                            </div>
                        </div>

                    </div>
                </Container>
            </Container>
            <div className={s.video}>
                <video preload="auto" loop autoPlay={true} muted={true}  src={karate} className={s.videoItem}/>
                <div className={s.titleTeamWrapper}>
                    {language === "ua" &&   <Image className={s.titleTeamImage} src={titleTeamUA}/>}
                    {language === "ru" &&   <Image className={s.titleTeamImage} src={titleTeamRU}/>}
                    {language === "en" &&   <Image className={s.titleTeamImageEN} src={titleTeamEN}/>}
                </div>
            </div>
        </>
    );
};

export default AboutPage;
