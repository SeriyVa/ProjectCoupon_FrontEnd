import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import { useState } from 'react';
import notify, { SccMsg } from '../../services/Notification';
import './UpdateCustomer.css'

type innerForm = {
    email: string

}

type Props = {
    companyId: number,
    companyEmail: string,
    updateCompanyOffHandler: () => void,
    updateCompanyEmail: (updatedCompanyEmail: string) => void
}


const UpdateCompany = (props: Props) => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const [innerForm, setInnerForm] = useState<innerForm>({ email: '' })



    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, email: event.target.value })
    }

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const authaxios = axios.create({
                baseURL: 'http://localhost:3000',
                headers: { Authorization: token }
            })
            await authaxios.post('http://localhost:8080/admin/updateCompany', {


                id: props.companyId,
                email: innerForm.email

            })
            notify.success(SccMsg.COMPANY_UPDATE_SUCCESS)
            setInnerForm({ email: '' });
            props.updateCompanyOffHandler();
            props.updateCompanyEmail(innerForm.email);

        } catch (err: any) {
            notify.error(err);
        }

    }




    return (
        <div className='update_customer'>
            <form onSubmit={submitHandler}>

                <label htmlFor="Email">New email</label>

                <input type="email" onChange={emailChangeHandler} value={innerForm.email} required placeholder='Email@example.com' />

                <button type='submit'>Change</button>
                <button onClick={props.updateCompanyOffHandler}>Cancel</button>
            </form>
        </div>
    )
}

export default UpdateCompany;