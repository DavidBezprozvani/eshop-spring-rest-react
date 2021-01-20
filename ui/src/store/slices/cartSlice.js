import {createSlice} from "@reduxjs/toolkit"
import {loadFromStorage, saveToStorage} from "../../Utils/LocalStorage";
import _ from "lodash"


const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, { payload: product }) {
            state.push(product)
        },
        removeProduct(state, { payload: id }) {
            return state.filter(product => product.id !== id)
        }
    }
})

let previousCart = initialState

export const subscribeToCartChanges = (store) => {
    store.subscribe(_.throttle(() => {

        const currentCart = store.getState().cart

        if (previousCart !== currentCart) {
            previousCart = currentCart
            saveToStorage('cart', currentCart)
        }
    }, 1000))
}



export const loadCartFromStorage = () => loadFromStorage('cart')
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;