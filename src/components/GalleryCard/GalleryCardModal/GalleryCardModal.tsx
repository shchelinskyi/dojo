import s from "./GalleryCardModal.module.scss";
import {Image} from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {FC} from "react";

type GalleryCardModalProps = {
    images:string[],
    onClose: () => void
}


const GalleryCardModal:FC<GalleryCardModalProps> = ({images, onClose}) => {
    return (
        <div className={s.overlay}  onClick={onClose}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="mySwiper"
                >
                    {images.length > 0 && images.map((itemSrc) => (
                        <SwiperSlide key={itemSrc}>
                            <div className={s.imageWrapper}>
                            <Image src={itemSrc} className={s.image}/>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default GalleryCardModal;
