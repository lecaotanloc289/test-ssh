import axios from "axios";
import { API_PUBLIC_URL } from "./config";

export const getUserInfo = async (user_id) => {
    try {
        const api = `${API_PUBLIC_URL}users/${user_id}`;
        const res = await axios.get(api);
        return res.data;
    } catch (err) {
        console.log("Error fetching user info:", err);
        throw err;
    }
};

export const getAllCategories = async () => {
    try {
        const api = `${API_PUBLIC_URL}categories`;
        const res = await axios.get(api);
        // res.data : Object
        return res.data;
    } catch (err) {
        console.log("Error fetching categories: ", err);
        throw err;
    }
};
