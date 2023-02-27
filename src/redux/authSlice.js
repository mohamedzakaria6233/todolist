import {createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name:"auth",
    initialState:{isLog:"false"},
    reducers:{
    IN:(state,action)=>{
            state.isLog='true'
        },
    OUT:(state,action)=>{
        state.isLog="false"
    }
    }
})
export default authSlice.reducer;
export const authAction=authSlice.actions;
console.log(authSlice.reducer)