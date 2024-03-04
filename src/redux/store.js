import { combineReducers, applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import {
    dataReducer,
    favoriteReducer,
    searchReducer,
} from "./reducers/reducers";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    favorite: favoriteReducer,
    data: dataReducer,
    auth: authReducer,
    search: searchReducer,
    cart: cartReducer,
    // Thêm reducer khác nếu cần
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
