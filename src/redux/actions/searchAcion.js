import axios from "axios";
import { API_PUBLIC_URL } from "../../utils/config";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const FETCH_SEARCH_RESULTS_SUCCESS = "FETCH_SEARCH_RESULTS_SUCCESS";

export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
});

export const fetchSearchResultsSuccess = (results) => ({
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    payload: results,
});

export const fetchSearchResults = (term) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${API_PUBLIC_URL}products/search?key=${term}`,
            );
            const results = response.data;
            dispatch(fetchSearchResultsSuccess(results));
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };
};
