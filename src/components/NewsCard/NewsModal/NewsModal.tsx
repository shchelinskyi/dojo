import s from "./NewsModal.module.scss";
import arrow from "../../../assets/images/news/arrow-back.svg";
import {Image} from "react-bootstrap";
import {FC, ReactNode} from "react";

type NewsModalProps = {
    children: ReactNode;
    onClose: () => void;
}

const NewsModal: FC<NewsModalProps> = ({children, onClose}) => {
    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <Image src={arrow} className={s.icon} onClick={onClose}/>
                {children}
            </div>
        </div>
    );
};

export default NewsModal;
