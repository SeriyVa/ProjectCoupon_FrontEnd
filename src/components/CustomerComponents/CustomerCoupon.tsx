import './Coupon.css'
import AddCouponPurchase from './AddCouponPurchase';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import { useState } from 'react';
import DeletePurchaseCoupon from './DeletePurchaseCoupon'



type props = {
    Coupons: coupon,
    deleteCompanyHandler:(coupoId:number)=>void
    


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



const CustomerCoupon = (props: props) => {


    const clientType = useSelector<RootState, string>(state => state.auth.userDetails.clientType);
    const [details, setDetails] = useState<boolean>(false);



    const detailsOnHandler = () => {
        if (details) {
            setDetails(false)
        } else {
            setDetails(true);

        }
    }

    return (
        <div>
            {!details ? <div className='coupon'>
                <li>
                    <div className='coupon_part'>{props.Coupons.category}</div>
                    <div className='coupon_part'>{props.Coupons.title}</div>
                    <button onClick={detailsOnHandler}>coupon details</button>
                    <DeletePurchaseCoupon id={props.Coupons.id} deleteCompanyHandler={props.deleteCompanyHandler} ></DeletePurchaseCoupon>
                    

                </li>
            </div>
                : <div className='coupon_detailsOn'>
                    <li className='coupon_detailsOn_li'>
                        <div className='coupon_part'>{props.Coupons.category}</div>
                        <div className='coupon_part'>{props.Coupons.title}</div>
                        <button onClick={detailsOnHandler}>coupon details</button>
                        <DeletePurchaseCoupon id={props.Coupons.id} deleteCompanyHandler={props.deleteCompanyHandler} ></DeletePurchaseCoupon>


                    </li>
                    <li className='coupon_detailsOn_li_special'>
                        <p>description:</p>
                        <div className='coupon_detailsOn_description'>{props.Coupons.description}</div>
                        <li className='coupon_detailsOn_specialLi'><p>coupons left: {props.Coupons.amount}</p>
                            <p>price: {props.Coupons.price}$</p></li>
                        <li className='coupon_detailsOn_specialLi'><p>start date: {props.Coupons.startDate} </p>
                            <p>exp. date: {props.Coupons.endDate}</p></li>
                    </li>
                </div>}

        </div>


    );
}

export default CustomerCoupon;