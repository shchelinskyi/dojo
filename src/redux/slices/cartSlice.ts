import {createSlice} from '@reduxjs/toolkit';

export type CartItem = {
    id: string,
    image: string,
    title: {
        en: string,
        ru: string,
        ua: string
    },
    price: number,
    size: string,
    color: string,
    category: string,
    quantity: number
}

type CartStateProps = {
    isOpenedCartModal: boolean,
    cartItems: CartItem[],
    total: number,
    isOpenedAddToCartModal: boolean;
    isOpenedOrderedModal: boolean;
}

const initialState: CartStateProps = {
    isOpenedCartModal: false,
    cartItems:  [],
    total: 0,
    isOpenedAddToCartModal: false,
    isOpenedOrderedModal: false
};

const cartSlice = createSlice({
    name: 'isCartSlice',
    initialState,
    reducers: {
        openCartModal: (state) => {
            document.body.style.overflowY = 'hidden';
            state.isOpenedCartModal = true;
        },
        closeCartModal: (state) => {
            document.body.style.overflowY = 'auto';
            state.isOpenedCartModal = false;
        },
        addToCart: (state, action) => {
            const { id, color, size } = action.payload;
            const cartItem = action.payload;
            const existingCartItemIndex = state.cartItems.findIndex(item => item.id === id && item.color === color && item.size === size);
            if (existingCartItemIndex !== -1) {
                const updatedCart = [...state.cartItems];
                updatedCart[existingCartItemIndex].quantity += 1;
                state.cartItems = [...updatedCart];
            } else {
                const updatedCart = [...state.cartItems, cartItem];
                state.cartItems = [...updatedCart];
            }
        },
        calculateTotal: (state) => {
            state.total = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        removeFromCartOne: (state, action) => {
            const { id, color, size } = action.payload;
            const existingCartItemIndex = state.cartItems.findIndex(item => item.id === id && item.color === color && item.size === size);

            if (existingCartItemIndex !== -1) {
                const updatedCart = [...state.cartItems];

                if (updatedCart[existingCartItemIndex].quantity > 1) {
                    updatedCart[existingCartItemIndex].quantity -= 1;
                } else {
                    updatedCart.splice(existingCartItemIndex, 1);
                }

                state.cartItems = [...updatedCart];
            }
        },
        removeFromCartAllQuantity: (state, action) => {
            const { id, color, size } = action.payload;
            state.cartItems = state.cartItems.filter(item => !(item.id === id && item.color === color && item.size === size));
        },
        openAddToCartModal: (state) => {
            document.body.style.setProperty('overflow-y', 'hidden', 'important');
            state.isOpenedAddToCartModal = true;
        },
        closeAddToCartModal: (state) => {
            state.isOpenedAddToCartModal = false;
            document.body.style.overflowY = 'auto';
        },
        openOrderedModal: (state) => {
            document.body.style.setProperty('overflow-y', 'hidden', 'important');
            state.isOpenedOrderedModal = true;
        },
        closeOrderedModal: (state) => {
            state.isOpenedOrderedModal = false;
            document.body.style.overflowY = 'auto';
        },
        removeAllCartProducts:(state) => {
            state.cartItems =  [];
            state.total = 0;
        },
    },
});

export const {
    openCartModal,
    closeCartModal,
    addToCart,
    calculateTotal,
    removeFromCartOne,
    removeFromCartAllQuantity,
    openAddToCartModal,
    closeAddToCartModal,
    removeAllCartProducts,
    openOrderedModal,
    closeOrderedModal
} = cartSlice.actions;


export default cartSlice.reducer;