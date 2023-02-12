import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Console } from "console";
import { stat } from "fs";
import { json } from "node:stream/consumers";



const initialState = {
    companiesList: []
};


const companiesListSlice = createSlice({

    name: 'companiesList',
    initialState,
    reducers: {

        setGetAllCompanies(state, { payload }) {
            state.companiesList = payload;
            console.log(state.companiesList);

        },
        setDeleteCompany(state, { payload }) {

        },
        setUpdateCompany(state, { payload }) {

        }

    }
});

const store = configureStore({
    reducer: companiesListSlice.reducer
})

export const companiesListAction = companiesListSlice.actions;

export default companiesListSlice.reducer;
