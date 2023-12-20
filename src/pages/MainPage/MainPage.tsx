import {useEffect, useState} from "react";
import {Container, Image} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {openForm} from "../../redux/slices/formTrialSessionSlice.ts";
import CustomButton from "../../components/CustomButton";
import roundText from "../../assets/images/main/roundText.webp";
import lightning from "../../assets/images/main/lightning.webp";
import volcano from "../../assets/images/main/volcano.webp";
import cloudL from "../../assets/images/main/cloud-l.webp";
import cloudRt from "../../assets/images/main/cloud-rt.webp";
import cloudRb from "../../assets/images/main/cloud-rb.webp";
import build from "../../assets/images/main/build.webp";
import arch from "../../assets/images/main/arch.webp";
import boy1 from "../../assets/images/main/boy1.gif";
import boy2 from "../../assets/images/main/boy2.gif";
import boy11 from "../../assets/images/main/boy1D.gif";
import boy22 from "../../assets/images/main/boy2D.gif";
import fingerDown from "../../assets/images/main/fingerDown.webp";
import cn from "classnames";
import s from "./MainPage.module.scss";
import bucket from "../../assets/images/main/bucket.webp";
import {openCartModal} from "../../redux/slices/cartSlice.ts";


interface Position {
    x: number;
    y: number;
}


const MainPage = () => {
    const dispatch = useAppDispatch();
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const cartItems = useAppSelector(state => state.cart.cartItems);

    const { t } = useTranslation();

    useEffect(() => {
        const handleMouseMove = (e:MouseEvent) => {
            requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calculateParallax = (position: Position, strength: number): { transform: string } => ({
        transform: `translate(${position.x / strength}px, ${position.y / strength}px)`,
    });

    const handleOpenModal = () => {
        dispatch(openForm())
    }

    return (
        <div className={s.wrapper}>

            <Container className={s.contentContainer}>

                <div className="position-relative" style={{ marginTop:"100px", width: "900px"}}>
                    <div className={s.titleWrapper}>
                        <h3 className={s.mainTitle}>{t('mainTitle1')}</h3>
                        <h3 className={cn(s.mainTitle, s.secondLine)}>{t('mainTitle2')}</h3>
                    </div>
                    <p className={s.offerContent}>
                        {t("offer")}
                    </p>
                    <div className={s.btnWrapper}>
                        <CustomButton onClick={handleOpenModal}>
                            {t("wantToBe")}
                        </CustomButton>
                    </div>
                </div>
                <div className={s.logoContainer}>
                    <Image className={s.roundText} src={roundText}/>
                    <Image className={s.lightning} src={lightning}/>
                </div>
                <Image className={s.boy1} src={boy1} style={calculateParallax(mousePosition, 50)}/>
                <Image className={s.boy2} src={boy2} style={calculateParallax(mousePosition, -50)}/>
                <Image className={s.boy11} src={boy11} style={calculateParallax(mousePosition, 50)}/>
                <Image className={s.boy22} src={boy22} style={calculateParallax(mousePosition, -50)}/>
                <Image className={s.build} src={build}/>
                <Image className={s.arch} src={arch}/>
                <Image className={s.volcano} src={volcano}/>
                <Image className={s.cloudRt} src={cloudRt}/>
                <Image className={s.cloudRb} src={cloudRb}/>
                <Image className={s.cloudL} src={cloudL}/>
                <div className={s.moreItem}>
                    <p className={s.fingerText}>{t('more')}</p>
                    <Image src={fingerDown} style={{width: "35px"}}/>
                </div>
                <div className={s.bucketWrapper} onClick={() => dispatch(openCartModal())}>
                    <Image src={bucket} className={s.bucketIcon}/>
                    <div className={s.badge}>{cartItems.length > 0 ? cartItems.length : null}</div>
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
