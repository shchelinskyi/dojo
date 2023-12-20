import {FC, useEffect, useRef, useState, SetStateAction, Dispatch} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import Loading from "../../components/Loading";
import FormTrialSession from "../../components/FormTrialSession";
import InformModal from "../../components/InformModal/InformModal.tsx";
import MainPage from "../MainPage";
import AboutPage from "../AboutPage";
import TeamPage from "../TeamPage";
import GymsPage from "../GymsPage";
import TrialLessonPage from "../TrialLessonPage";
import GalleryPage from "../GalleryPage";
import SupportUsPage from "../SupporUsPage";
import Ticker from "../../components/Ticker";
import NewsPage from "../NewsPage";
import ReadMore from "../../components/ReadMore";
import ContactsPage from "../ContactsPage";
import Cart from "../../components/Cart";
import {useTranslation} from "react-i18next";
import {closeInfoModal} from "../../redux/slices/formTrialSessionSlice.ts";
import {closeAddToCartModal, closeOrderedModal, openCartModal} from "../../redux/slices/cartSlice.ts";
import s from "./Main.module.scss";
import React from "react";
import ShopPage from "../ShopPage";
import { useLocation } from "react-router-dom";

type RefData = {
    aboutRef: React.RefObject<HTMLDivElement> | null;
    teamRef: React.RefObject<HTMLDivElement> | null;
    gymsRef: React.RefObject<HTMLDivElement> | null;
    galleryRef: React.RefObject<HTMLDivElement> | null;
    shopRef: React.RefObject<HTMLDivElement> | null;
    contactsRef: React.RefObject<HTMLDivElement> | null;
};


interface MainProps {
    setRefData: Dispatch<SetStateAction<RefData | null>>;
}


const Main: FC<MainProps> = ({setRefData}) => {

    const aboutRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const gymsRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const shopRef = useRef<HTMLDivElement>(null);
    const contactsRef = useRef<HTMLDivElement>(null);

    const [loading, setLoading] = useState(true);
    const {t} = useTranslation();
    const dispatch = useAppDispatch();


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const data = {aboutRef, teamRef, gymsRef, galleryRef, shopRef, contactsRef }
        setRefData({... data})

    }, [aboutRef, teamRef, gymsRef, galleryRef, shopRef, contactsRef  ]);


    const isFormOpen = useAppSelector(state => state.formTrial.isOpenedForm);
    const isCartOpened = useAppSelector(state => state.cart.isOpenedCartModal);
    const isOpenedSuccessModal = useAppSelector(state => state.formTrial.isOpenedSuccessModal);
    const isOpenedAddToCartModal = useAppSelector(state => state.cart.isOpenedAddToCartModal);
    const isOpenedOrderedModal = useAppSelector(state => state.cart.isOpenedOrderedModal);

    const handleClickBtn = () => {
        dispatch(closeAddToCartModal())
        dispatch(openCartModal())
    }

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            sessionStorage.setItem("scrollPosition", window.scrollY.toString());
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const storedScrollPosition = sessionStorage.getItem("scrollPosition");
        if (storedScrollPosition) {
            window.scrollTo(0, parseInt(storedScrollPosition));
        }
    }, [location.pathname]);


    return (
        <>
            {loading && <Loading/>}
            {isFormOpen && <FormTrialSession/>}
            {isOpenedSuccessModal && <InformModal onClose={() => dispatch(closeInfoModal())}>{t("infoText")}</InformModal>}
            {isOpenedAddToCartModal && <InformModal onClose={() => dispatch(closeAddToCartModal())}><div>
                {t("addToCart")}
                </div>
                <button onClick={handleClickBtn} className={s.orderBtn}>
                    {t("orderBtn")}
                </button>
            </InformModal>}
            {isOpenedOrderedModal && <InformModal onClose={() => dispatch(closeOrderedModal())}>{t("ordered")}</InformModal>}
            {isCartOpened && <Cart/>}
            <MainPage/>
            <div ref={aboutRef} style={{paddingTop:"100px"}}>
                <AboutPage/>
            </div>
            <div ref={teamRef}>
                <TeamPage/>
            </div>
            <div ref={gymsRef}>
                <GymsPage/>
            </div>
            <TrialLessonPage/>
            <div ref={galleryRef}>
                <GalleryPage/>
            </div>
            <SupportUsPage/>
            <Ticker/>
            <div ref={shopRef}>
                <ShopPage/>
            </div>
            <NewsPage />
            <ReadMore/>
            <div ref={contactsRef}>
                <ContactsPage/>
            </div>
        </>
    );
};

export default Main;
