import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from './redux/store';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



const ScrollToTopOnMount = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <></>;
};

export default ScrollToTopOnMount;




