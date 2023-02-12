import './Coupon.css'
import DeleteCoupon from './DeleteCoupon'
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import { useState } from 'react';
import UpdateCoupon from './UpdateCoupon'


type props = {
    Coupons: coupon,
    deleteCouponHandler?: (id: number) => void

}


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



const Coupon = (props: props) => {


    const clientType = useSelector<RootState, string>(state => state.auth.userDetails.clientType);
    const [details, setDetails] = useState<boolean>(false);
    const [update, setUpdate] = useState<boolean>(false);
    const [updatedCategory, setUpdatedCategory] = useState<string>(props.Coupons.category);
    const [updatedTitle, setUpdatedTitle] = useState<string>(props.Coupons.title);
    const [updatedDescription, setUpdatedDescription] = useState<string>(props.Coupons.description);
    const [updatedAmount, setUpdatedAmount] = useState<string>(props.Coupons.amount);
    const [updatedPrice, setUpdatedPrice] = useState<number>(props.Coupons.price);
    const [updatedStartDate, setUpdatedStartDate] = useState<string>(props.Coupons.startDate);
    const [updatedEndDate, setUpdatedEndDate] = useState<string>(props.Coupons.endDate);


    const detailsOnHandler = () => {
        if (details) {
            setDetails(false)
        } else {
            setDetails(true);
            setUpdate(false)
        }
    }

    const updateOnHandler = () => {
        if (update) {
            setUpdate(false)
        } else {
            setUpdate(true);
            setDetails(false)
        }
    }
    const updateOffHandler = () => {
        setUpdate(false)
    }

    const updatedCoupon = (updatedCategory: string, updatedTitle: string, updatedDescription: string, updatedAmount: string, updatedPrice: number, updatedStartDate: string, updatedEndDate: string) => {
        setUpdatedCategory(updatedCategory);
        setUpdatedTitle(updatedTitle);
        setUpdatedDescription(updatedDescription);
        setUpdatedAmount(updatedAmount);
        setUpdatedPrice(updatedPrice);
        setUpdatedStartDate(updatedStartDate);
        setUpdatedEndDate(updatedEndDate);


    }



    return (
        <div>



            {!details ? <div className='coupon'>
                <li>
                    <div className='coupon_part'>{updatedCategory}</div>
                    <div className='coupon_part'>{updatedTitle}</div>
                    <button onClick={detailsOnHandler}>coupon details</button>
                    <button onClick={updateOnHandler}>update</button>
                    <DeleteCoupon id={props.Coupons.id} name={props.Coupons.title} deleteCouponHandler={props.deleteCouponHandler} />
                </li>
            </div>
                : <div className='coupon_detailsOn'>
                    <li className='coupon_detailsOn_li'>
                        <div className='coupon_part'>{updatedCategory}</div>
                        <div className='coupon_part'>{updatedTitle}</div>
                        <button onClick={detailsOnHandler}>coupon details</button>
                        <button onClick={updateOnHandler}>update</button>
                        <DeleteCoupon id={props.Coupons.id} name={props.Coupons.title} deleteCouponHandler={props.deleteCouponHandler} />
                    </li>
                    <li className='coupon_detailsOn_li_special'>
                        <p>description:</p>
                        <div className='coupon_detailsOn_description'>{updatedDescription}</div>
                        <li className='coupon_detailsOn_specialLi'><p>coupons left: {updatedAmount}</p>
                            <p>price: {props.Coupons.price}$</p></li>
                        <li className='coupon_detailsOn_specialLi'><p>start date: {updatedStartDate} </p>
                            <p>exp. date: {updatedEndDate}</p></li>

                    </li>
                </div>}
            {update && <div className='coupon_detailsOn'>

                <UpdateCoupon couponId={props.Coupons.id} updateCustomerOffHandler={updateOffHandler} updatedCoupon={updatedCoupon}></UpdateCoupon>
            </div>}
        </div>


    );
}

export default Coupon;