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
export const fetchBookById = createAsyncThunk("books/fetchBookById", async (id, { rejectWithValue }) => {
    try {
        const { data } = api.get(`books/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch book");
    }
});


// create new book
export const createBook = createAsyncThunk("books/createBook", async (bookData, { rejectWithValue }) => {
    try {
        const { data } = api.post("/books", bookData, { withCredentials: true });
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to create book");
    }
});


// update a book by id
export const updateBook = createAsyncThunk("books/updateBook", async (id, bookData, { rejectWithValue }) => {
    try {
        const { data } = api.put(`/books/${id}`, bookData, { withCredentials: true });
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to update book");
    }
});


// delete a book by id
export const deleteBook = createAsyncThunk("books/deleteBook", async (id, { rejectWithValue }) => {
    try {
        const { data } = api.delete(`/books/${id}`, { withCredentials: true });
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to delete book");
    }
});


// Slice
const bookSlice = createSlice({
    name: "book",
    initialState: {
        books: [],
        book: null,
        loading: false,
        error: null,
        success: false,
    },
    reducers: {
        resetBookStore: (state) => {
            state.error = null;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            // get all books
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooks.fulfilled, (state , action)=>{
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
            })
            // get book by id
            .addCase(fetchBookById.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBookById.fulfilled, (state, action)=>{
                state.loading = false;
                state.book = action.payload;
            })
            .addCase(fetchBookById.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
            })
    }
});


export const { resetBookStore } = bookSlice.actions;
export default bookSlice.reducer;