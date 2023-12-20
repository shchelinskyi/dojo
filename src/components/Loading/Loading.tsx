import s from "./Loading.module.scss";
import loading from "../../assets/images/loading/loading.svg";
import {Image} from "react-bootstrap";
import cn from "classnames";

const Loading = () => {
    return (
        <div className={s.wrapper}>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomOut)}/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomIn)}/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomOut)}/>
            <Image src={loading} className={cn(s.loadingIcon, s.zoomIn)}/>
        </div>
    );
};

export default Loading;
