import {createSlice} from '@reduxjs/toolkit';

type ModalState = {
    isOpenedProductModal: boolean
}

const initialState: ModalState = {
    isOpenedProductModal: false
};

const productSlice = createSlice({
    name: 'isProductSlice',
    initialState,
    reducers: {
        openProductModal: (state) => {
            state.isOpenedProductModal = true;
        },
        closeProductModal: (state) => {
            state.isOpenedProductModal = false;
        },
    },
});

export const {
    openProductModal,
    closeProductModal
} = productSlice.actions;

export default productSlice.reducer;