import { Fragment, useState, useEffect } from 'react';
import './CompanyCouponsList.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import Coupon from './Coupon';



type coupon = {
    id: number,
    category: string,
    title: string,
    description: string,
    amount: string,
    price: number,
    startDate: string,
    endDate: string

}

const CompanyCouponsList = () => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const companyId = useSelector<RootState, string>(state => state.auth.userDetails.id);

    const [coupons, setCoupons] = useState([]);
    const [innerCategoryForm, setInnerCategoryForm] = useState<string>('empty');
    const [innerPriceForm, setInnerPriceForm] = useState<number>(0)
    let firstStepFiltered = [];
    let secondStepFiltered = [];


    const filteredPriceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInnerPriceForm(event.target.valueAsNumber)
    }


    useEffect(() => {

        const authaxios = axios.create({
            baseURL: 'http://localhost:3000',
            headers: { Authorization: token, companyId: companyId }
        })
        authaxios.get('http://localhost:8080/company/getCompanyCoupons')
            .then((response) => {
                setCoupons(response.data)
            }

            )

    }, [])

    const deleteCouponHandler = (id: number) => {
        const newList = coupons.filter((coupon: coupon) => coupon.id !== id)
        setCoupons(newList)
    }

    if (innerCategoryForm === 'empty') {
        firstStepFiltered = coupons;
    } else {
        firstStepFiltered = coupons.filter(
            (coupons: coupon) => coupons.category === innerCategoryForm)
    }

    if (innerPriceForm === 0) {
        secondStepFiltered = firstStepFiltered;
    } else {
        secondStepFiltered = firstStepFiltered.filter(
            (coupons: coupon) => coupons.price < innerPriceForm)
    }

    const filterByCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {

        setInnerCategoryForm(event.target.value)

    }


    const oneCoupon = secondStepFiltered.map((oneCoupon: coupon) => { return <Coupon key={oneCoupon.id} Coupons={oneCoupon} deleteCouponHandler={deleteCouponHandler} ></Coupon> })
    return (
        <div>
            <li className='coupons_list_li'>
                <p>Filter by category:</p>
                <select name="Select Category" onChange={filterByCategory} >
                    <option value="empty">empty</option>
                    <option value="FOOD">Food</option>
                    <option value="ELECTRICITY"> Electricity</option>
                    <option value="RESTAURANT"> Restaurant</option>
                    <option value="VACATION"> Vacation</option>
                    <option value="FASHION"> Fashion</option>
                </select>

                <p>Filter by priceMax:</p>
                <input className='coupons_list_input' type={'number'} onChange={filteredPriceHandler} min={0} value={innerPriceForm} required placeholder='Enter min. 1' />
            </li>
            <div >
                <li className='coupons_list_coupon_special'>
                    <p className='p1_special'>Category</p>
                    <p className='p2_special'>Title</p>

                </li>
            </div>
            <div className='coupons_list'>
                {oneCoupon}
            </div>
        </div>
    )
}

export default CompanyCouponsList;