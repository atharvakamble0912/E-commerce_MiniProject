export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        // case "REMOVE_FROM_CART":
        //     const updatedCart = state.cart.filter((c) => c.id !== action.payload.id);
        //     return {
        //         ...state,
        //         cart: updatedCart,
        //     };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
            };

        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            }
        // case "CHANGE_CART_QTY":
        //     return {
        //         ...state,
        //         cart: state.cart.filter((c) =>
        //             c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        //         ),
        //     };
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.map((product) =>
                    product.product_id === action.payload.id
                        ? { ...product, qty: action.payload.qty }
                        : product
                ),
            };

        default:
            return state;
    }
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload };
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock };

        case "FILTER_BY_RATING":
            return { ...state, byRating: action.payload };
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload };
        case "CLEAR_FILTERS":
            return { byStock: false, byFastDelivery: false, byRating: 0 };
        default:
            return state;
    }
};
