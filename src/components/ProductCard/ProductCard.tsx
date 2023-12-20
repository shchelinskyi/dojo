import {FC, useState} from "react";
import {Image} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import MainProductCard from "../MainProductCard";
import s from "./ProductCard.module.scss";

export type ProductItemType = {
    id: string;
    title: {
        en: string,
        ru: string,
        ua: string
    };
    price: number;
    images: string[] | [];
    category: string;
    size: string[] | [];
    material?: {
        en: string,
        ru: string,
        ua: string
    };
    color: string[] | [];
    children: boolean;
    adult: boolean;
    description: {
        en: string,
        ru: string,
        ua: string
    },
    briefDescription: {
        en: string,
        ru: string,
        ua: string
    },
    model?: string;
    producer?: string;
    length?: string;
    comment:{
        en: string,
        ru: string,
        ua: string
    };
}

type ProductItemProps = {
    productItem: ProductItemType
}

const ProductCard:FC<ProductItemProps> = ({productItem }) => {
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';

    const [isModalOpened, setIsModalOpened] = useState(false);

    const handleOpenProduct = () => {
        document.body.style.overflowY = 'hidden';
        setIsModalOpened(true);
    }

    const handleCloseProductModal = () => {
        document.body.style.overflowY = 'auto';
        setIsModalOpened(false);
    }

    return (
        <>
            <div className={s.card} onClick={handleOpenProduct}>
                <div className={s.imgWrapper}>
                    <Image className={s.productImg} src={productItem.images[0]}/>
                </div>
                <div className={s.textBlock}>
                    <h6 className={s.productTitle}>{t(`title.${currentLanguage}`, (productItem.title as any)[currentLanguage] as string)}</h6>
                    <h6 className={s.productPrice}>{productItem.price} <span>{t("uah")}</span></h6>
                </div>

            </div>
            {isModalOpened && <MainProductCard productItem={productItem} onClose={handleCloseProductModal}/>}
        </>

    );
};

export default ProductCard;
