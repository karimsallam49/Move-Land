import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Tresponse } from "../../shared/Tresponse";

const actgetbookmark:any=createAsyncThunk("actgetbookmark;/catchdata",async(id,thunkAPI)=>{

     
     const {rejectWithValue}=thunkAPI
    try {




            const response=await axios.get<Tresponse>(`https://api.themoviedb.org/3/movie/${id}?&api_key=0dc8d6b88362149e44e4a99060fc5d3d`)
            console.log(response.data)
            return response.data
        

        
            
                



        }
        



           
                
    
     catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message||error.message)

        }else{

            return rejectWithValue("unexpected error")
        }
        
    }
})

export default actgetbookmark;