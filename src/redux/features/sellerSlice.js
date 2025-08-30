import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const loginSeller = createAsyncThunk("seller/login", async ({ email, password }, { rejectWithValue }) => {
    try {
        const { data } = await api.post("/seller/login", { email, password });
        localStorage.setItem("token", data.token);
        localStorage.setItem("seller", data);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Login Failed");
    }
});

export const registerSeller = createAsyncThunk("seller/register", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await api.post("/seller/register", formData);
        localStorage.setItem("token", data.token);
        localStorage.setItem("seller", data);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Register Failed");
    }
})

const initialState = {
    seller: JSON.parse(localStorage.getItem("seller")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null
};
const sellerSlice = createSlice({
    name: "seller",

    reducers: {

    },
    extraReducers: {

    }
});


