import axios from "axios";
import { API_PUBLIC_URL } from "../../utils/config";
export const loginRequest = () => ({
    type: "LOGIN_REQUEST",
});
// Hành động đăng nhập thành công
export const loginSuccess = (userData) => ({
    type: "LOGIN_SUCCESS",
    payload: userData,
});

// Hành động đăng nhập thất bại
export const loginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error,
});

// Hành động đăng nhập và tải thông tin người dùng
export const signInAndLoadUserData = (data) => {
    return async (dispatch) => {
        const apiSignIn = `${API_PUBLIC_URL}users/signin`;
        try {
            const res = await axios.post(apiSignIn, {
                email: data.email,
                password_hash: data.password_hash,
            });

            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem("userData", JSON.stringify(res.data));

            // Gọi hành động đăng nhập thành công
            dispatch(loginSuccess(res.data));
        } catch (error) {
            // Gọi hành động đăng nhập thất bại
            dispatch(loginFailure(error.response));
            console.log("Error response from server:", error.data);
        }
    };
};
