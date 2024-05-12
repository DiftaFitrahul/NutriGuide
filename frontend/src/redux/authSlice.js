import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initalState:{
        isLoggedIn: false,
    },
    reducers:{
        login: (state) =>{
            state.isLoggedIn = true
        },
        logout:(state) =>{
            state.isLoggedIn = false
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducers