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
export const fetchBookById = createAsyncThunk("books/fetchBookById", async(id , {rejectWithValue})=>{
    try {
        const {data} = api.get(`books/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch book");
    }
});


// create new book
export const createBook = createAsyncThunk("books/createBook", async(bookData, {rejectWithValue})=>{
    try {
        const {data }= api.post("/books", bookData, {withCredentials: true});
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to create book");
    }
})
// update a book by id
// delete a book by id