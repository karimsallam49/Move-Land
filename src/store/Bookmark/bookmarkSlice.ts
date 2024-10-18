import { createSlice } from "@reduxjs/toolkit";
import { Trecords } from "../../shared/Trecords";
import actgetbookmark from "./actGetbookmarks";
import { Tloading } from "../../shared/Tloading";
type initialprops={

    itemid:number [];
    record:Trecords[]
    checker:number[]
    loading:Tloading
    error:null|string
}

const initialState:initialprops={
    itemid:[],
    record:[],
    checker:[0],
    loading:"idle",
    error:null
}


const bookmarkslice=createSlice({
    name:"bookmarkslice",
    initialState,
    reducers:{
        addtobookmark:(state,action)=>{
            const id=action.payload

            if(state.itemid.includes(id)){
                state.itemid=state.itemid.filter((el)=>
                    el!==id
            )
        }
        
        
        
        
        
        else if(!state.itemid.includes(id)){
            state.itemid.push(id)
            console.log(state.itemid[id])
              
            }

        },
        deletefrombookmark:(state,action)=>{

            state.record=state.record.filter((el)=>
                el.id!==action.payload
            )
        }
    },
    extraReducers:(bulider)=>{

        bulider.addCase(actgetbookmark.pending,(state)=>{

            state.loading="pending";
            state.error=null;
        })
        bulider.addCase(actgetbookmark.fulfilled,(state,action)=>{
            
            state.record.push(action.payload)
               
                console.log(action.payload.id)
           state.loading="success";
            state.error=null;

            

            

        })
        bulider.addCase(actgetbookmark.rejected,(state,action)=>{

            state.loading="faild";
            if(action.payload && typeof action.payload=="string"){

                state.error=action.payload;
            }
        })
    }
})


export default bookmarkslice.reducer
export const {addtobookmark,deletefrombookmark}=bookmarkslice.actions