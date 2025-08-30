import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const loginSeller = createAsyncThunk("seller/login", async ({ email, password }, { rejectWithValue }) => {
    try {
        const { data } = await api.post("/seller/login", { email, password });
        localStorage.setItem("token", data.token);
        localStorage.setItem("seller", JSON.stringify(data));
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Login Failed");
    }
});

export const registerSeller = createAsyncThunk("seller/register", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await api.post("/seller/register", formData);
        localStorage.setItem("token", data.token);
        localStorage.setItem("seller", JSON.stringify(data));
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
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.seller = null;
            localStorage.removeItem("token");
            localStorage.removeItem("seller");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginSeller.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(loginSeller.fulfilled, (state, action) => {
                state.loading = false;
                state.seller = action.payload;
                state.token = action.payload.token;
            })
            .addCase(loginSeller.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerSeller.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(registerSeller.fulfilled, (state, action)=>{
                
            })
    }
});

export const { logout } = sellerSlice.actions;
export default sellerSlice.reducer;


