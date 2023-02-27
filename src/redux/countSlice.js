/* eslint-disable */
import {createSlice} from '@reduxjs/toolkit';
import {authAction} from './authSlice.js'
const countSlice=createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        INCREASE:(state,action)=>{
            state.count+=action.payload
        },
        DECREASE: (state,action)=>{
            state.count--;
        }
    },
    extraReducers:{
        [authAction.IN]:(state,action)=>{
            console.log("Iam extra reducer work in countSlice")
            state.count=0;
        }
    }
    
})
export default countSlice.reducer;
export const counterAction=countSlice.actions

