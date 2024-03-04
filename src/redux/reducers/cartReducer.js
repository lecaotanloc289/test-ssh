import {
    ADD_TO_CART,
    DECREASE_QUANTITY_SUCCESS,
    FETCH_DATA_FROM_CART,
    INCREASE_QUANTITY_SUCCESS,
    REMOVE_FROM_CART,
} from "../actions/actionTypes";

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_DATA_FROM_CART:
            return action.payload;

        case ADD_TO_CART:
            return [...state, action.payload];

        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload.id);

        case INCREASE_QUANTITY_SUCCESS:
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            );

        case DECREASE_QUANTITY_SUCCESS:
            return state.map((item) =>
                item.id === action.payload && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            );

        default:
            return state;
    }
};

export default cartReducer;
