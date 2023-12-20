import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../pages/Layout";
import i18n from "i18next";
import PrivacyPolicyPageUA from "../pages/PrivacyPolicyPage/PrivacyPolicyPageUA";
import PrivacyPolicyPageEN from "../pages/PrivacyPolicyPage/PrivacyPolicyPageEN";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import PrivacyPolicyPageRU from "../pages/PrivacyPolicyPage/PrivacyPolicyPageRU";
import OpenCup from "../components/NewsCard/NewsItems/OpenCup";
import KumiteMarathon from "../components/NewsCard/NewsItems/KumiteMarathon";
import SummerSchool31 from "../components/NewsCard/NewsItems/SummerSchool31";
import ChildTraining from "../components/NewsCard/NewsItems/ChildTraining";
import CoachDay from "../components/NewsCard/NewsItems/CoachDay";
import KarateDay from "../components/NewsCard/NewsItems/KarateDay";
import MeaningTerm from "../components/NewsCard/NewsItems/MeaningTerm";
import SummerSchool32 from "../components/NewsCard/NewsItems/SummerSchool32";
import Championship from "../components/NewsCard/NewsItems/Championship";
import ContractOfferUA from "../pages/ContractOffer/ContractOfferUA";
import ContractOfferEN from "../pages/ContractOffer/ContractOfferEN";
import ContractOfferRU from "../pages/ContractOffer/ContractOfferRU";
import CherkasyOblastCup from "../components/NewsCard/NewsItems/CherkasyOblastCup";
import FighterCup from "../components/NewsCard/NewsItems/FighterCup";
import CupIrpin from "../components/NewsCard/NewsItems/CupIrpin";
import ShchoTakeZbory from "../components/NewsCard/NewsItems/ShchoTakeZbory";
import KievOpenCup from "../components/NewsCard/NewsItems/KievOpenCup";
import KarateBegins from "../components/NewsCard/NewsItems/KarateBegins";
import CandyOrLife from "../components/NewsCard/NewsItems/CandyOrLife";
import MeansTeam from "../components/NewsCard/NewsItems/MeansTeam";
import KarateSea from "../components/NewsCard/NewsItems/KarateSea";
import UsefulInfo from "../components/NewsCard/NewsItems/UsefulInfo";
import OpenChampionship from "../components/NewsCard/NewsItems/OpenChampionship";
import Enerkid from "../components/NewsCard/NewsItems/Enerkid";
import Championship2018 from "../components/NewsCard/NewsItems/Championship2018";
import DojoSempai from "../components/NewsCard/NewsItems/DojoSempai";
import Vygnanecz from "../components/NewsCard/NewsItems/Vygnanecz/Vygnanecz.tsx";

type RefData = {
    aboutRef: React.RefObject<HTMLDivElement> | null;
    teamRef: React.RefObject<HTMLDivElement> | null;
    gymsRef: React.RefObject<HTMLDivElement> | null;
    galleryRef: React.RefObject<HTMLDivElement> | null;
    // shopRef: React.RefObject<HTMLDivElement> | null;
    contactsRef: React.RefObject<HTMLDivElement> | null;
};

const AppRouter = () => {
    const currentLanguage = i18n.language || 'ua';
    const [language, setLanguage] = useState("i18n.language");
    const [refData, setRefData] = useState<RefData | null>(null);
    const {t} = useTranslation();
    const change = t("language");

    useEffect(() => {
        setLanguage(currentLanguage)
    }, [change]);

    return (
        <div>
            <Routes>
                <Route path="/misak-dojo/" element={<Layout refData={refData}/>}>
                    <Route index element={<Main setRefData={setRefData}/>}/>
                    {language === "ua" && <Route path="privacy-policy" element={<PrivacyPolicyPageUA/>}/>}
                    {language === "en" && <Route path="privacy-policy" element={<PrivacyPolicyPageEN/>}/>}
                    {language === "ru" && <Route path="privacy-policy" element={<PrivacyPolicyPageRU/>}/>}
                    {language === "ua" && <Route path="contract-offer" element={<ContractOfferUA/>}/>}
                    {language === "en" && <Route path="contract-offer" element={<ContractOfferEN/>}/>}
                    {language === "ru" && <Route path="contract-offer" element={<ContractOfferRU/>}/>}
                    <Route path="news/openCup" element={<OpenCup />} />
                    <Route path="news/kumiteMarathon" element={<KumiteMarathon />} />
                    <Route path="news/summerSchool31" element={<SummerSchool31 />} />
                    <Route path="news/childTraining" element={<ChildTraining />} />
                    <Route path="news/coachDay" element={<CoachDay />} />
                    <Route path="news/karateDay" element={<KarateDay />} />
                    <Route path="news/meaningTerm" element={<MeaningTerm />} />
                    <Route path="news/summerSchool32" element={<SummerSchool32 />} />
                    <Route path="news/championship" element={<Championship />} />
                    <Route path="news/cherkasyOblastCup" element={<CherkasyOblastCup />} />
                    <Route path="news/fighterCup" element={<FighterCup />} />
                    <Route path="news/cupIrpin" element={<CupIrpin />} />
                    <Route path="news/shchoTakeZbory" element={<ShchoTakeZbory />} />
                    <Route path="news/kievOpenCup" element={<KievOpenCup />} />
                    <Route path="news/karateBegins" element={<KarateBegins />} />
                    <Route path="news/candyOrLife" element={<CandyOrLife />} />
                    <Route path="news/meansTeam" element={<MeansTeam />} />
                    <Route path="news/karateSea" element={<KarateSea />} />
                    <Route path="news/usefulInfo" element={<UsefulInfo />} />
                    <Route path="news/openChampionship" element={<OpenChampionship />} />
                    <Route path="news/enerkid" element={<Enerkid />} />
                    <Route path="news/championship2018" element={<Championship2018 />} />
                    <Route path="news/dojoSempai" element={<DojoSempai />} />
                    <Route path="news/vygnanecz" element={<Vygnanecz />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;