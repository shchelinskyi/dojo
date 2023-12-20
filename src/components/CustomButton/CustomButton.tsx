import {FC, ReactNode, MouseEvent, CSSProperties} from 'react';
import s from "./CustomButton.module.scss";

type CustomButtonProps = {
    children:ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    style?: CSSProperties;
}

const CustomButton: FC<CustomButtonProps> = ({ children, onClick, ...props}) => {
    return (
        <button className={s.btn} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default CustomButton;
