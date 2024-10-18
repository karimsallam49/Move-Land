import { createSlice } from "@reduxjs/toolkit";
import { Tloading } from "../../shared/Tloading";
import actGetsearchresalut from "./aCtSearchResalut";


type movieslicetypes={

    record :{
        page:number,
        results:[{
            original_title:string;
            backdrop_path:string;
            id:number;
            vote_average:number;
            overview:string;
            bookmarked?:boolean
        }]
    };
    loading:Tloading;
    error :null|string
}

const initialState:movieslicetypes={
    record:{
        page:0,
        results:[{ original_title:"",
            backdrop_path:"",
            id:0,
            vote_average:0,
            overview:"",}]
    },
    loading:"idle",
    error:null
}
const Searchresalut=createSlice({

    name :"searchresalut",
    initialState,
    reducers:{
        cleanup:(state)=>{

            state.record.results=[{ original_title:"",
                backdrop_path:"",
                id:0,
                vote_average:0,
                overview:"",}]
        }
    },
    extraReducers:(bulider)=>{

        bulider.addCase(actGetsearchresalut.pending,(state)=>{

            state.loading="pending";
            state.error=null;
        })
        bulider.addCase(actGetsearchresalut.fulfilled,(state,action)=>{

            state.loading="success";
            state.record=action.payload
            state.error=null;
        })
        bulider.addCase(actGetsearchresalut.rejected,(state,action)=>{

            state.loading="faild";
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }
        })
    }
})


export default  Searchresalut.reducer
export const{cleanup}=Searchresalut.actions