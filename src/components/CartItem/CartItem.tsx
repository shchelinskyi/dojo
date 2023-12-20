import {FC, useEffect, useState} from 'react';
import {Image} from "react-bootstrap"
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {useAppDispatch} from "../../hooks";
import {addToCart, calculateTotal, removeFromCartAllQuantity, removeFromCartOne} from "../../redux/slices/cartSlice";
import s from "./CartItem.module.scss";
import type {CartItem as CartItemP} from "../../redux/slices/cartSlice";

interface CartItemProps {
    cartProduct: CartItemP
}

const CartItem: FC<CartItemProps> = ({cartProduct}) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const currentLanguage = i18n.language || 'ua';
    const [productSize, setProductSize] = useState('');

    useEffect(() => {
        if (cartProduct.size === "3" || cartProduct.size === "5" || cartProduct.size === "7" || cartProduct.size === "9" || cartProduct.size === "100") {
            setProductSize(t(`size${cartProduct.size}`))
        } else {
            setProductSize(cartProduct.size)
        }
    }, []);

    const addQuantity = () => {
        dispatch(addToCart(cartProduct));
        dispatch(calculateTotal());
    }

    const removeQuantity = () => {
        dispatch(removeFromCartOne(cartProduct));
        dispatch(calculateTotal());
    }

    const removeProduct = () => {
        dispatch(removeFromCartAllQuantity(cartProduct));
        dispatch(calculateTotal());
    }


    return (
        <div className={s.container}>
            <Image src={cartProduct.image} className={s.productImg}/>
            <div className={s.content}>
                <div className={s.description}>
                    <h5 className={s.title}>
                        {t(`title.${currentLanguage}`, (cartProduct.title as any)[currentLanguage] as string)}
                    </h5>
                    <div className={s.charactersBlock}>
                        {cartProduct.size !== "" &&
                            <div className={s.charactersItem}>
                                <div className={s.characterLabel}>
                                    {cartProduct.category === "backpack" && t("sizeBackpack")}
                                    {cartProduct.category === "belt" && t("sizeBelt")}
                                    {(cartProduct.category !== "belt" && cartProduct.category !== "backpack") && t("size")}
                                </div>
                                <div className={s.characterValue}>
                                    {productSize}
                                </div>
                            </div>
                        }
                        {cartProduct.color !== "" &&
                            <div className={s.charactersItem}>
                                <div className={s.characterLabel}>
                                    {t("color")}:
                                </div>
                                <div className={s.characterValue}>
                                    {t(cartProduct.color)}
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={s.btnGroup}>
                    <button className={s.btnDel} onClick={removeQuantity}>-</button>
                    <span className={s.quantity}>{cartProduct.quantity}</span>
                    <button className={s.btnAdd} onClick={addQuantity}>+</button>
                </div>
                <div className={s.price}>{cartProduct.price} {t("uah")}</div>
            </div>
            <div className={s.delBtn} onClick={removeProduct}>&times;</div>
        </div>
    );
};

export default CartItem;
