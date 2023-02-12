import './Coupon.css'
import AddCouponPurchase from './AddCouponPurchase';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import { useState } from 'react';



type props = {
    Coupons: coupon,


}


type coupon = {
    id: number,
    category: string,
    title: string,
    description: string,
    amount: number,
    price: number,
    startDate: string,
    endDate: string

}



const Coupon = (props: props) => {


    const clientType = useSelector<RootState, string>(state => state.auth.userDetails.clientType);
    const [details, setDetails] = useState<boolean>(false);
    const [couponAmount, setCouponAmount] =useState<number>(props.Coupons.amount)



    const detailsOnHandler = () => {
        if (details) {
            setDetails(false)
        } else {
            setDetails(true);

        }
    }

    const copounPurchased =()=>{
        setCouponAmount(couponAmount-1);
    }
    return (
        <div>
            {!details ? <div className='coupon'>
                <li>
                    <div className='coupon_part'>{props.Coupons.category}</div>
                    <div className='coupon_part'>{props.Coupons.title}</div>
                    <button onClick={detailsOnHandler}>coupon details</button>
                    <AddCouponPurchase id={props.Coupons.id} buyACouponHandler={copounPurchased}></AddCouponPurchase>

                </li>
            </div>
                : <div className='coupon_detailsOn'>
                    <li className='coupon_detailsOn_li'>
                        <div className='coupon_part'>{props.Coupons.category}</div>
                        <div className='coupon_part'>{props.Coupons.title}</div>
                        <button onClick={detailsOnHandler}>coupon details</button>
                        <AddCouponPurchase id={props.Coupons.id} buyACouponHandler={copounPurchased}></AddCouponPurchase>


                    </li>
                    <li className='coupon_detailsOn_li_special'>
                        <p>description:</p>
                        <div className='coupon_detailsOn_description'>{props.Coupons.description}</div>
                        <li className='coupon_detailsOn_specialLi'><p>coupons left: {couponAmount}</p>
                            <p>price: {props.Coupons.price}$</p></li>
                        <li className='coupon_detailsOn_specialLi'><p>start date: {props.Coupons.startDate} </p>
                            <p>exp. date: {props.Coupons.endDate}</p></li>
                    </li>
                </div>}

        </div>


    );
}

export default Coupon;