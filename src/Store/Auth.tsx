import { configureStore, createSlice } from "@reduxjs/toolkit";




const initialState = {
    userDetails: {
        clientType: '',
        id: '',
        name: '',
        email: '',
        token: ''
    }

};

const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {

        setUserDetails(state, { payload }) {
            state.userDetails = payload;

        },

        logout(state) {
            state.userDetails = {
                clientType: '',
                id: '',
                name: '',
                email: '',
                token: ''
            }
        }

    }
});

const store = configureStore({
    reducer: authSlice.reducer
})

export const authAction = authSlice.actions;

export default authSlice.reducer;
