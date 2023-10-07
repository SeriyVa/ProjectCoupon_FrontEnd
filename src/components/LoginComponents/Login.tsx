import './Login.css';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RootState } from '../../Store/Index';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../Store/LoginStatus'
import axios from 'axios';
import { authAction } from '../../Store/Auth';
import notify, { SccMsg } from '../../services/Notification';
import image from '../../images/image7.jpg'
import { current } from '@reduxjs/toolkit';
import { EnumType } from 'typescript';
import { stringify } from 'querystring';







type Props = {
    loginType: string
}


type newClient = {
    id: number
    email: string,
    password: string,
    clientType: string,
    token: string,

}
enum clientType {

    ADMIN = 'Admin', COMPANY = 'Company', CUSTOMER = 'Customer', NULL = 'null'
}


const LoginForm = () => {



    const [loginFormIsOn,setLoginFormIsOn] = useState<boolean>(false);
    const loginForm = (currentName:clientType) => {
      setNameForm(currentName);
      setLoginFormIsOn(true);
      
    }



    const isLoggedIn = useSelector<RootState, boolean>(state => state.loginStatus.loginStatus);
    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const dispatch = useDispatch();
    const history = useHistory();
   

    // const [isLoggedInn, setIsLoggedInn] = useState(false);
    const [loginFormIsValid, setLoginFormIsValid] = useState<boolean>(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
    const [nameForm, setNameForm]=useState<clientType>(clientType.NULL);
    // const [isValidLogin, setIsValidLogin] = useState<boolean>(false);

    const loginTimer = () => {


        setTimeout(() => {


            history.push('/login')
            loginAction.logout()


        }, 1000 * 60 * 60

        )
    }





    // useEffect(()=>{const loggedInStoregeInfo = localStorage.getItem('isLoggedIn');

    // if(loggedInStoregeInfo === '1'){
    // setIsLoggedInn(true);}


    // },[setIsLoggedInn]);



    // const logoutHandler = () =>{
    //   localStorage.setItem('isLoggedIn','0');

    // }

    useEffect(() => {
        setLoginFormIsValid(emailIsValid && passwordIsValid);
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredEmail(event.target.value);
    }

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPassword(event.target.value);
    }

    // const validateEmailHandler = () => {
    //     setEmailIsValid(enteredEmail.includes('@'));
    // }

    // const validatePasswordHandler = () => {
    //     setPasswordIsValid(enteredPassword.trim().length > 6);
    // }


    // const submitHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    //    event.preventDefault();
    // }

    


    // const type: string = props.loginType;
    // let header = '';
    // let client = clientType.NULL;

    // if (type === 'Admin') {
    //     header = 'Welcome Admin'
    //     client = clientType.ADMIN;

    // }
    // if (type === 'Company') {
    //     header = 'User company Login';
    //     client = clientType.COMPANY;
    // }
    // if (type === "Customer") {
    //     header = 'Customer Login';
    //     client = clientType.CUSTOMER;
    // }



    if (token.length > 0) {
        if (nameForm === clientType.ADMIN) {
            history.push('/admin/welcome');
            dispatch(loginAction.login());
            setNameForm(clientType.NULL)

        }
        if (nameForm === clientType.COMPANY) {
            history.push('/company/welcome');
            dispatch(loginAction.login());
            setNameForm(clientType.NULL)
        }
        if (nameForm=== clientType.CUSTOMER) {
            history.push('/customer/welcome');
            dispatch(loginAction.login());
            setNameForm(clientType.NULL)
        }

    } else {
        dispatch(loginAction.logout())

    }

    const loginIsValid = async (event: React.FormEvent<HTMLFormElement>) => {
        
        
        event.preventDefault();
        const loginDitails = {
            email: enteredEmail,
            password: enteredPassword,
            clientType: nameForm
        }
        console.log(JSON.stringify(loginDitails))
        try {
            axios.create({ baseURL: 'http://localhost:3000' })
            const newClient: newClient = ((await axios.post('http://localhost:8080/login', loginDitails))).data
            dispatch(authAction.setUserDetails(newClient))
            loginTimer();   
            notify.success(SccMsg.LOGIN_SUCCESS)
        } catch (err: any) {
            notify.error(err);
        }

        // .then
        //     (res => {
        //         return res.data
        //     }).catch((err) => notify.error(err))




        //    dispatch(authAction.setToken(newClient.token));
        //    dispatch(authAction.setClientType(newClient.clientType));

    }

    const clickHandler = () => {
        setLoginFormIsOn(false);

    }


    return (
        <div className='login'> 
            <div>
            <p className='newP'>Our coupons,<br /> your pleasures.</p> 
            <div className={`loginMenu ${loginFormIsOn ? 'log' : ''}`}>
         {!loginFormIsOn &&<li><button onClick={()=>loginForm(clientType.ADMIN)} >Admin</button><button onClick={()=>loginForm(clientType.COMPANY)} >Company</button><button onClick={()=>loginForm(clientType.CUSTOMER)} >Customer</button></li>}
         <div>
         {loginFormIsOn&&
            <form onSubmit={loginIsValid}>
                <p>Welcome, {nameForm}</p>
                <label htmlFor='Email'>Email</label>
                <br />
                <input type="email"
                    id='email'
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    // onBlur={validateEmailHandler} 
                    required placeholder='Email@exampale.com' />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" autoComplete='off'
                    id='password'
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    // onBlur={validatePasswordHandler} 
                    required placeholder='Password' />
                <br />
                <button type='submit'>Sign In</button>
                <br />
                <button onClick={clickHandler}>Back</button>
            </form> }
            </div>
            
       </div>     
 </div>         
 
</div>
    );


}

export default LoginForm;