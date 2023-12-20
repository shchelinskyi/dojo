import s from "./ChangeData.module.scss";
import {Image} from "react-bootstrap";
import loading from "../../assets/images/loading/loading.svg";
import cn from "classnames";

const ChangeData = () => {
    return (
        <div className={s.wrapper}>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomOut)}/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomIn)}/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomOut)}/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomIn)}/>
        </div>
    );
};

export default ChangeData;
