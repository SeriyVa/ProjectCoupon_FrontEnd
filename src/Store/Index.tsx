import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './LoginStatus';
import auth from "./Auth";
import companiesList from "./CompaniesList";



const store = configureStore({
    reducer: { loginStatus: loginReducer, auth: auth, companiesList: companiesList }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;