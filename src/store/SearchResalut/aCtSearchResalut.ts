import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const actGetsearchresalut:any=createAsyncThunk("getmovies/thunk",async(search:string,thunkApi)=>{


const {rejectWithValue}=thunkApi

try {
    console.log(search)
    const response=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=0dc8d6b88362149e44e4a99060fc5d3d`)
    return response.data
} catch (error) {
    if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data.message||error.message)

    }else{


        return rejectWithValue("unexpected error")
    }
}


})

export default actGetsearchresalut