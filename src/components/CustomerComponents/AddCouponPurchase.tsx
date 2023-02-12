import axios from "axios"
import { useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import notify, { SccMsg } from '../../services/Notification';

type coupon = {
    id: number,
    // buyACoponHandler?:()=>void | undefined
    buyACouponHandler: () => void

}

const AddCouponPurchase = (props: coupon) => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const customerId = useSelector<RootState, string>(state => state.auth.userDetails.id)

    const [allCouponsList, setAllCouponsList] = useState([]);

    const buyACoupon = async () => {
        try {
            const authaxios = axios.create({
                baseURL: 'http://localhost:3000',
                headers: { Authorization: token, customerId: customerId, couponId: props.id }
            })
            await authaxios.get('http://localhost:8080/customer/addPurchaseCoupon/')
                .then((response) => {
                    setAllCouponsList(response.data)
                })
            props.buyACouponHandler();
            notify.success(SccMsg.COUPON_PURCHASE_SUCCESS)
        } catch (err: any) {
            notify.error(err)
        }
    }



    return (

        <div>
            <button onClick={buyACoupon}>buy coupon</button>
        </div>

    );
}

export default AddCouponPurchase;