import { FC, ReactNode} from 'react';
import {Image} from "react-bootstrap";
import karate from "../../assets/images/modal/karate.svg"
import karate2 from "../../assets/images/modal/karate2.svg"
import s from "./InformModal.module.scss";

type InformModalProps = {
    children: ReactNode;
    onClose: () => void;
};


const InformModal: FC<InformModalProps> = ({children, onClose}) => {

    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.contentWrapper} onClick={(e) => e.stopPropagation()}>
                <Image src={karate} className={s.karateImg}/>
                <Image src={karate2} className={s.karateImg2}/>
                <div className={s.content}>
                    {children}
                </div>
                <span className={s.closeBtn} onClick={onClose}>&times;</span>
            </div>
        </div>
    );
};

export default InformModal;
