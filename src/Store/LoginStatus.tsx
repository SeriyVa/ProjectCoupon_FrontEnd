import { configureStore, createSlice } from "@reduxjs/toolkit";


let login = localStorage.getItem('isLoggedIn');
let loginStatus = false;
const InitialState = () => {
    if (login === '1') {
        loginStatus = true;
        console.log(loginStatus);

    } else {
        loginStatus = false;
    }

}

const loginStatusSlice = createSlice({

    name: 'loginStatus',
    initialState: { loginStatus },
    reducers: {

        login(state) {
            state.loginStatus = true;
            InitialState();
            localStorage.setItem('isLoggedIn', '1');
        },
        logout(state) {
            state.loginStatus = false;
            localStorage.setItem('isLoggedIn', '0');
        }
    }
});

const store = configureStore({
    reducer: loginStatusSlice.reducer
})

export const loginAction = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
