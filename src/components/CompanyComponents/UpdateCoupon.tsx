import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import { useState } from 'react';
import notify, { SccMsg } from '../../services/Notification';
import './UpdateCoupon.css'

type innerForm = {
    category: string,
    title: string,
    description: string,
    amount: string,
    price: number,
    startDate: string,
    endDate: string
}

type Props = {
    couponId: number,
    updateCustomerOffHandler: () => void,
    updatedCoupon: (updatedCategory: string, updateTitle: string, updateDescription: string, updatedAmount: string, updatedPrice: number, updateStartDate: string, updatedEndDate: string) => void
}


const UpdateCustomer = (props: Props) => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const [innerForm, setInnerForm] = useState<innerForm>({ category: '', title: '', description: '', amount: '', price: 0, startDate: '', endDate: '' })



    const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInnerForm({ ...innerForm, category: event.target.value })
    }
    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, title: event.target.value })
    }
    const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, description: event.target.value })
    }
    const amountnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, amount: event.target.value })
    }
    const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, price: event.target.valueAsNumber })
    }
    const startDateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, startDate: event.target.value })
    }
    const endDateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerForm({ ...innerForm, endDate: event.target.value })
    }

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const authaxios = axios.create({
                baseURL: 'http://localhost:3000',
                headers: { Authorization: token },

            })
            await authaxios.put('http://localhost:8080/company/updateCoupon', {
                id: props.couponId,
                category: innerForm.category,
                title: innerForm.title,
                description: innerForm.description,
                amount: innerForm.amount,
                price: innerForm.price,
                startDate: innerForm.startDate,
                endDate: innerForm.endDate,

            })
            notify.success(SccMsg.COUPON_UPDATE_SUCCESS)
            setInnerForm({ category: '', title: '', description: '', amount: '', price: 0, startDate: '', endDate: '' });
            props.updateCustomerOffHandler();
            props.updatedCoupon(innerForm.category, innerForm.title, innerForm.description, innerForm.amount, innerForm.price, innerForm.startDate, innerForm.endDate);

        } catch (err: any) {
            notify.error(err);
        }

    }




    return (
        <div className='update_coupon'>

            <form onSubmit={submitHandler}>
                <li>
                    <label htmlFor='category' >Category</label>
                    <select name="Select Category" onChange={categoryChangeHandler}>
                        <option value="empty">empty</option>
                        <option value="FOOD">Food</option>
                        <option value="ELECTRICITY"> Electricity</option>
                        <option value="RESTAURANT"> Restaurant</option>
                        <option value="VACATION"> Vacation</option>
                        <option value="FASHION"> Fashion</option>
                    </select>
                    <label htmlFor="title" >Title</label>
                    <input type="text" onChange={titleChangeHandler} value={innerForm.title} required placeholder='Title' />
                    <label htmlFor="description" >Description</label>
                    <input type="text" onChange={descriptionChangeHandler} value={innerForm.description} required placeholder='Description' />
                    <label htmlFor="amount" >Amount</label>
                    <input type="number" onChange={amountnChangeHandler} value={innerForm.amount} required placeholder='Enter min. 1' />
                </li>
                <li className='update_coupon_li'>
                    <label htmlFor="price" >Price</label>
                    <input type="number" step={0.1} onChange={priceChangeHandler} value={innerForm.price} required placeholder='Enter min. 1$' />
                    <label htmlFor='startDate' >Start Date</label>
                    <input type='date' onChange={startDateChangeHandler} value={innerForm.startDate} />
                    <label htmlFor='endDate' >Exp. Date</label>
                    <input type='date' onChange={endDateChangeHandler} value={innerForm.endDate} />
                </li>
                <button type='submit' className='update_coupon_buttonSpecial'>Update</button>
            </form>

        </div>
    )
}

export default UpdateCustomer;