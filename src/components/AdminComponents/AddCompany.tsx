import './AddCompany.css'
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import notify, { SccMsg } from '../../services/Notification';
import image2 from '../../images/stars4.jpg'



type innerForm = {
    name: string,
    email: string,
    password: string
}


const AddCompany = () => {
   
    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);




    const [innerForm, setInnerForm] = useState<innerForm>({ name: '', email: '', password: '' })



    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, name: event.target.value })
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
            await authaxios.put('http://localhost:8080/admin/addCompany', {
                name: innerForm.name,
                email: innerForm.email,
                password: innerForm.password
            })
            notify.success(SccMsg.COMPANY_CREATE_SUCCESS)
            setInnerForm({ name: '', email: '', password: '' });
        } catch (err: any) {
            notify.error(err);

        }


    }
    return (
        <div className='add_company'>
            <div className='boxHeader'><p>Add Company</p> <img className="image1" src={image2} alt="" /></div>

            <form onSubmit={submitHandler}>
                <label htmlFor='Name' >Name</label>
                <br />
                <input type="text" onChange={nameChangeHandler} value={innerForm.name} required placeholder='Name' />
                <br />
                <label htmlFor="Email" >Email</label>
                <br />
                <input type="email" name='email' onChange={emailChangeHandler} value={innerForm.email} required placeholder='Email@example.com' />
                <br />
                <label htmlFor="passwor" >Password</label>
                <br />
                <input type="password" onChange={passwordChangeHandler} value={innerForm.password} required placeholder='Password' />
                <br />
                <button type='submit'>Add</button>
            </form>

        </div>
    );
}

export default AddCompany;