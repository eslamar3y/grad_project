import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";


export const userLogin = createAsyncThunk("Auth/login", async (userData) => {
    // const response = await fetch("https://localhost:7289/api/Accounts/login", {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(Username, Password)
    // });
    console.log(userData)
    const response = await axios.post("https://localhost:7289/api/Accounts/login", userData);

    if (response.status === 401) {
        throw json({ message: "User password or User name is Wrong" }, { status: 401 });
    }
    if (!response.ok) {
        throw json({ message: "failed to login" }, { status: 500 });
    }
    else {
        const data = response.json();
        console.log(data);
        return data;
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
    }
})

export default authSlice.reducer;