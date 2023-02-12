import './AddCustomer.css';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import notify, { SccMsg } from '../../services/Notification';
import image2 from '../../images/stars4.jpg'


type innerForm = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}


const AddCustomer = () => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);




    const [innerForm, setInnerForm] = useState<innerForm>({ firstName: '', lastName: '', email: '', password: '' })



    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, firstName: event.target.value })
    }
    const lastNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, lastName: event.target.value })
    }
    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, email: event.target.value })
    }
    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, password: event.target.value })
    }

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const authaxios = axios.create({
                baseURL: 'http://localhost:3000',
                headers: { Authorization: token }
            })
            await authaxios.put('http://localhost:8080/admin/addCustomer', {
                firstName: innerForm.firstName,
                lastName: innerForm.lastName,
                email: innerForm.email,
                password: innerForm.password
            })
            notify.success(SccMsg.CUSTOMER_CREATE_SUCCESS)
            setInnerForm({ firstName: '', lastName: '', email: '', password: '' });
        }
        catch (err: any) {
            notify.error(err);
        }


    }
    return (
        <div className='add_customer'>
            <div className='boxHeader'><p>Add Customer</p> <img className="image1" src={image2} alt="" /></div>

            <form onSubmit={submitHandler}>
                <label htmlFor='firstName' >First Name</label>
                <br />
                <input type="text" onChange={nameChangeHandler} value={innerForm.firstName} required placeholder='First name' />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input type="text" onChange={lastNameChangeHandler} value={innerForm.lastName} required placeholder='Last name' />
                <br />
                <label htmlFor="Email" >Email</label>
                <br />
                <input type="text" onChange={emailChangeHandler} value={innerForm.email} required placeholder='Email@example.com' />
                <br />
                <label htmlFor="Passwor" >Password</label>
                <br />
                <input type="Password" onChange={passwordChangeHandler} value={innerForm.password} required placeholder='Password' />
                <br />
                <button type='submit'>Add</button>
            </form>

        </div>
    );
}

export default AddCustomer;