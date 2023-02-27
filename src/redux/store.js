/* eslint-disable */
import {createSlice , createStore ,configureStore} from '@reduxjs/toolkit';
import countSlice from './countSlice';
import authSlice from './authSlice';
// const store=createStore(countSlice.reducer)
const store=configureStore({reducer:{counter:countSlice,auther:authSlice}})

export default store;