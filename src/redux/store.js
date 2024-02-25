import { combineReducers, applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    search: searchReducer
    // Thêm reducer khác nếu cần
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
