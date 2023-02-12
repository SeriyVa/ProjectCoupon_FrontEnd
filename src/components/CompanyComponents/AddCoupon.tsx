import './AddCoupon.css'
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import notify, { SccMsg } from '../../services/Notification';



type innerForm = {
    category: string,
    title: string,
    description: string,
    amount: string,
    price: string,
    startDate: string,
    endDate: string

}


const AddCoupon = () => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const idCompany = useSelector<RootState, string>(state => state.auth.userDetails.id);




    // const date = new Date(2020, 0, 0);

    const [innerForm, setInnerForm] = useState<innerForm>({ category: '', title: '', description: '', amount: '', price: '', startDate: '', endDate: '' })



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
        setInnerForm({ ...innerForm, price: event.target.value })
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
                headers: { Authorization: token, idCompany: idCompany }
            })
            await authaxios.put('http://localhost:8080/company/addCoupon', {
                category: innerForm.category,
                title: innerForm.title,
                description: innerForm.description,
                amount: innerForm.amount,
                price: innerForm.price,
                startDate: innerForm.startDate,
                endDate: innerForm.endDate
            })
            setInnerForm({ category: '', title: '', description: '', amount: '', price: '', startDate: '', endDate: '' });
            notify.success(SccMsg.COUPON_CREATE_SUCCESS);
        } catch (err: any) {
            notify.error(err);
        }

    }
    return (
        <div className='add_coupon'>
            <p>Add Coupon</p>

            <form onSubmit={submitHandler}>
                <label htmlFor='category' >Category</label>
                <br />
                <select name="Select Category" onChange={categoryChangeHandler}>
                    <option value="empty">empty</option>
                    <option value="FOOD">Food</option>
                    <option value="ELECTRICITY"> Electricity</option>
                    <option value="RESTAURANT"> Restaurant</option>
                    <option value="VACATION"> Vacation</option>
                    <option value="FASHION"> Fashion</option>
                </select>
                <br />
                <label htmlFor="title" >Title</label>
                <br />
                <input type="text" onChange={titleChangeHandler} value={innerForm.title} required placeholder='Title' />
                <br />
                <label htmlFor="description" >Description</label>
                <br />
                <input type="text" onChange={descriptionChangeHandler} value={innerForm.description} required placeholder='Description' />
                <br />
                <label htmlFor="amount" >Amount</label>
                <br />
                <input type="number" onChange={amountnChangeHandler} value={innerForm.amount} required placeholder='Enter min. 1' />
                <br />
                <label htmlFor="price" >Price</label>
                <br />
                <input type="number" step={0.1} onChange={priceChangeHandler} value={innerForm.price} required placeholder='Enter min. 1$' />
                <br />
                <label htmlFor='startDate' >Start Date</label>
                <br />
                <input type='date' onChange={startDateChangeHandler} value={innerForm.startDate} />
                <br />
                <label htmlFor='endDate' >Exp. Date</label>
                <br />
                <input type='date' onChange={endDateChangeHandler} value={innerForm.endDate} />
                <br />
                <button type='submit'>Add</button>
            </form>

        </div>
    );
}

export default AddCoupon;