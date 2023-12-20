import {useAppDispatch, useAppSelector} from "../../hooks";
import {closeCartModal} from "../../redux/slices/cartSlice";
import s from "./Cart.module.scss";
import CartItem from "../CartItem";
import CartForm from "../CartForm";
import {useTranslation} from "react-i18next";


const Cart = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const total = useAppSelector(state => state.cart.total);
    const cartItems = useAppSelector(state => state.cart.cartItems);

    const handleCloseCartModal = () => {
        dispatch(closeCartModal())
    }

    return (
        <div className={s.overlay} onClick={handleCloseCartModal}>
            <div className={s.contentWrapper} onClick={(e) => e.stopPropagation()}>
                <div className={s.content}>
                    <div className={s.titleBlock}>
                        <h4 className={s.title}>{t("yourOrder")}</h4>
                        <div className={s.closeBtn} onClick={handleCloseCartModal}>&times;</div>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.cartItems}>
                        {cartItems.length > 0 && cartItems.map((cartProduct) => {
                            return (<CartItem key={`${cartProduct.id}-${cartProduct.color}-${cartProduct.size}`}
                                              cartProduct={cartProduct}/>)
                        })
                        }
                        {cartItems.length === 0 && <p className={s.cartFree}>{t("cartFree")}</p>}
                    </div>
                    <div className={s.line}></div>
                    <div className={s.totalPrice}>{t("sum")} {total} {t("uah")}</div>
                    {cartItems.length !== 0 && <CartForm/>}
                </div>
            </div>
        </div>
    );
};

export default Cart;
