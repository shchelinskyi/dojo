import { Outlet, useLocation } from 'react-router-dom';
import TheHeader from "../../components/TheHeader";
import TheFooter from "../../components/TheFooter";
import React from "react";

type RefData = {
    aboutRef: React.RefObject<HTMLDivElement> | null;
    teamRef: React.RefObject<HTMLDivElement> | null;
    gymsRef: React.RefObject<HTMLDivElement> | null;
    galleryRef: React.RefObject<HTMLDivElement> | null;
    // shopRef: React.RefObject<HTMLDivElement> | null;
    contactsRef: React.RefObject<HTMLDivElement> | null;
};

interface LayoutProps {
    refData: RefData | null;
}


const Layout: React.FC<LayoutProps> = ({refData}) => {
    // const { scrollActions } = useScrollActions();
    const location = useLocation();
    const isPrivacyPolicyPage = location.pathname !== "/misak-dojo/";


    return (
        <div>
            {!isPrivacyPolicyPage && <TheHeader refData={refData} />}
            <Outlet/>
            <TheFooter/>
        </div>
    );
};

export default Layout;
