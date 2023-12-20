import {useEffect, useState} from 'react';
import i18n from "i18next";
import {Container, Image} from "react-bootstrap";
import TrainerLabel from "../../components/TrainerLabel";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import horizontalLine from "../../assets/images/team/line-horizontal.webp";
import trainerM from "../../assets/images/team/trainer-main.webp";
import trainer1 from "../../assets/images/team/trainer-1.webp";
import trainer2 from "../../assets/images/team/trainer-2.webp";
import trainer3 from "../../assets/images/team/trainer-3.webp";
import trainer4 from "../../assets/images/team/trainer-4.webp";
import trainer5 from "../../assets/images/team/trainer-5.webp";
import trainerBg from "../../assets/images/team/trainer-bg.svg";
import spiral from "../../assets/images/team/spiral.svg";
import roundLogo from "../../assets/images/team/round-logo.svg";
import love from "../../assets/images/team/love.svg";
import {useTranslation} from "react-i18next";
import cn from "classnames";
import s from "./TeamPage.module.scss";



const TeamPage = () => {
    const { t } = useTranslation();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const currentLanguage = i18n.language || 'ua';
    const [language, setLanguage] = useState("i18n.language");
    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change]);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const shouldRenderMainTrainerSlide = screenWidth <= 992 || screenWidth >= 1200;




    return (
        <Container className="position-relative" style={{marginTop: "245px", paddingTop: "100px"}}>
            <h3 className={s.title}>{t("team")}</h3>
            <div className={s.trainerDescription}>
                <Image className={s.mainTrainerImage} src={trainerM}/>
                <TrainerLabel name= {t("trainerM")} rank={t("trainerMRank")}  mainTrainer={true}/>
                <Image className={s.spiral} src={spiral}/>
                <div className={s.textWrapper}>
                    <p className={s.trainerText}>
                        {t("trainerText1")}
                    </p>
                    <p className={s.trainerText}>
                        {t("trainerText2")}
                    </p>
                    {language === "ua" && <Image className={s.lineHorizontalUA} src={horizontalLine}/>}
                    {language === "en" && <Image className={s.lineHorizontalEN} src={horizontalLine}/>}
                    {language === "ru" && <Image className={s.lineHorizontalRU} src={horizontalLine}/>}

                </div>
            </div>
            <div className={s.swiperBlock}>
                <Swiper
                         breakpoints={{
                             360: {
                                 slidesPerView: 1.2,
                                 spaceBetween: 10,
                             },
                             640: {
                                 slidesPerView: 1.5,
                                 spaceBetween: 10,
                             },
                             768: {
                                 slidesPerView: 1.5,
                                 spaceBetween: 10,
                             },
                             993: {
                                 slidesPerView: 2.5,
                                 spaceBetween: 20,
                             },
                         }}
                         className="mySwiper">
                    {
                        shouldRenderMainTrainerSlide && (<SwiperSlide >
                        <div className={s.trainerCard}>
                            <Image className={s.trainerImgM} src={trainerM}/>
                            <div className={s.trainerBg}></div>
                            <div className={s.trainerLabel}>
                                <TrainerLabel name= {t("trainerM")} rank={t("trainerMRank")} mainTrainer={true}/>
                            </div>
                        </div>
                    </SwiperSlide>)
                    }
                    <SwiperSlide>
                        <div className={s.trainerCard}>
                            <Image className={s.trainerImgTwo} src={trainer1}/>
                            <div className={s.trainerBg}></div>
                            <div className={s.trainerLabel}>
                                <TrainerLabel name= {t("trainer1")} rank={t("trainer1Rank")}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.trainerCard}>
                            <Image className={s.trainerBg} src={trainerBg}/>
                            <Image className={s.trainerImgTwo} src={trainer2}/>
                            <div className={s.trainerLabel}>
                                <TrainerLabel name= {t("trainer2")} rank={t("trainer2Rank")}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.trainerCard}>
                            <Image className={s.trainerBg} src={trainerBg}/>
                            <Image className={s.trainerImg3} src={trainer3}/>
                            <div className={s.trainerLabel}>
                                <TrainerLabel name= {t("trainer3")} rank={t("trainer3Rank")}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.trainerCard}>
                            <Image className={s.trainerBg} src={trainerBg}/>
                            <Image className={cn(s.trainerImg,s.trainerImg4)}
                                   src={trainer4}/>
                            <div className={s.trainerLabel}>
                                <TrainerLabel name= {t("trainer4")} rank={t("trainer4Rank")}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.trainerCard}>
                            <Image className={s.trainerBg} src={trainerBg}/>
                            <Image className={cn(s.trainerImg,s.trainerImg5)}
                                   src={trainer5}/>
                            <div className={s.trainerLabel}>
                                <TrainerLabel name= {t("trainer5")} rank={t("trainer5Rank")}/>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className={s.trainersBlock}>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image className={s.trainerImg} src={trainer1}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name= {t("trainer1")} rank={t("trainer1Rank")}/>
                    </div>
                </div>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image className={s.trainerImg} src={trainer2}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name= {t("trainer2")} rank={t("trainer2Rank")}/>
                    </div>
                </div>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image className={s.trainerImg3} src={trainer3}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name= {t("trainer3")} rank={t("trainer3Rank")}/>
                    </div>
                </div>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image style={{height: "450px", width: "324px"}} className={s.trainerImg}
                           src={trainer4}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name= {t("trainer4")} rank={t("trainer4Rank")}/>
                    </div>
                </div>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image style={{height: "456px", width: "417px"}} className={s.trainerImg}
                           src={trainer5}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name= {t("trainer5")} rank={t("trainer5Rank")}/>
                    </div>
                </div>
                <div className={s.logoContainer}>
                    <Image className={s.roundLogo} src={roundLogo}/>
                    <Image src={love} style={{
                        width: "52px",
                        height: "79px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}/>
                </div>
            </div>
        </Container>
    );
};

export default TeamPage;


