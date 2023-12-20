import s from "./ReadMoreModalItem.module.scss";
import {FC, ReactNode} from "react";

type ReadMoreModalItem = {
    children: ReactNode;
    onClose: () => void;
}

const ReadMoreModalItem:FC<ReadMoreModalItem> = ({children, onClose}) => {
    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.contentWrapper}>
                <span className={s.closeBtn} onClick={onClose}>&times;</span>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ReadMoreModalItem;
