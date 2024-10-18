import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const actgetTv:any=createAsyncThunk("getmovies/thunk",async(_,thunkApi)=>{

const {rejectWithValue}=thunkApi

try {
    const response=await axios.get
    ("https://api.themoviedb.org/3/discover/tv?api_key=0dc8d6b88362149e44e4a99060fc5d3d")
    return response.data
} catch (error) {
    if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data.message||error.message)

    }else{


        return rejectWithValue("unexpected error")
    }
}


})

export default actgetTv