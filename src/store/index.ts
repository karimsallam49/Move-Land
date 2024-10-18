import { combineReducers, configureStore } from '@reduxjs/toolkit'
import movieslice from "./movies/MoviesSlice"
import Tvslice from"../store/TVseries/Tvslice"
import bookmarkslice from './Bookmark/bookmarkSlice'
import seacrhresalutslice from "./SearchResalut/SearchResalutslice"
import { persistStore,persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const bookmarkconfigration={
  key:"bookmarkslice",
  storage,
  whitelist:["record"]

}
const rootpersistconfgritaion={
  key:"root",
  storage,
  whitelist:["bookmarkslice"]
}



 const rootreducer = combineReducers({


    movieslice,
    bookmarkslice:persistReducer(bookmarkconfigration,bookmarkslice),
    Tvslice,
    seacrhresalutslice
    

   
 
})
const persistedreducer=persistReducer(rootpersistconfgritaion,rootreducer)
export const store=configureStore({

  reducer:persistedreducer,
  middleware:(getDefalutmiddleware)=>getDefalutmiddleware({
    serializableCheck:{
      ignoredActions:[  FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER]
    },
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const persistor=persistStore(store)
export default persistor