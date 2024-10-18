import { createRoot } from 'react-dom/client'
import Approuter from './Routes/Routes.tsx'
import { Provider } from 'react-redux'
import persistor, { store } from './store/index.ts'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'



createRoot(document.getElementById('root')!).render(
  

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <Approuter/>
    </PersistGate>

  </Provider>

)
