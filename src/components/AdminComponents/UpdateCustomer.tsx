import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import { useState } from 'react';
import notify, { SccMsg } from '../../services/Notification';
import './UpdateCompany.css'

type innerForm = {
    email: string,
    firstName: string,
    lastName: string
}

type Props = {
    customerId: number,
    customerEmail: string,
    updateCustomerOffHandler: () => void,
    updateCustomerEmail: (updatedCustomerEmail: string, updateCustomerFirstName: string, updateCustomerLastName: string) => void
}


const UpdateCustomer = (props: Props) => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const [innerForm, setInnerForm] = useState<innerForm>({ email: '', firstName: '', lastName: '' })



    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, email: event.target.value })
    }

    const firstNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, firstName: event.target.value })
    }

    const lastNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, lastName: event.target.value })
    }

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const authaxios = axios.create({
                baseURL: 'http://localhost:3000',
                headers: { Authorization: token },
            })
            await authaxios.put('http://localhost:8080/admin/updateCustomer', {
                id: props.customerId,
                email: innerForm.email,
                firstName: innerForm.firstName,
                lastName: innerForm.lastName
            })
            notify.success(SccMsg.CUSTOMER_UPDATE_SUCCESS)
            setInnerForm({ email: '', firstName: '', lastName: '' });
            props.updateCustomerOffHandler();
            props.updateCustomerEmail(innerForm.email, innerForm.firstName, innerForm.lastName);

        } catch (err: any) {
            notify.error(err);
        }

    }




    return (
        <div className='update_customer'>
            <form onSubmit={submitHandler}>

                <label htmlFor="firstName">First name</label>
                <input type="firstName" onChange={firstNameChangeHandler} value={innerForm.firstName} required placeholder='Customer first name' />
                <label htmlFor="Email">Last name</label>
                <input type="lastName" onChange={lastNameChangeHandler} value={innerForm.lastName} required placeholder='Customer last name' />
                <label htmlFor="Email">New email</label>
                <input type="email" onChange={emailChangeHandler} value={innerForm.email} required placeholder='Email@example.com' />
                <button type='submit'>Change</button>
                <button onClick={props.updateCustomerOffHandler}>Cancel</button>
            </form>
        </div>
    )
}

export default UpdateCustomer;