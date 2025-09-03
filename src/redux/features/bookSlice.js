import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

// get all books
export const fetchBooks = createAsyncThunk("books/fetchbooks", async (_, { rejectWithValue }) => {
    try {
        const { data } = await api.get("/books");
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to feach books");
    }
});


// get book by id
// create new book
// update a book by id
// delete a book by id