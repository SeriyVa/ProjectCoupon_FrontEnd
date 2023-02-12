import axios from "axios"
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import notify, { SccMsg } from '../../services/Notification';

type coupon = {
    id: number
    deleteCompanyHandler:(couponId: number)=>void
}

const DeletePurchaseCoupon = (props: coupon) => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const customerId = useSelector<RootState, string>(state => state.auth.userDetails.id)

    const deletePurchaseCouponHandler = () => {
        const authaxios = axios.create({
            baseURL: 'http://localhost:3000',
            headers: { Authorization: token, customerId: customerId, couponId: props.id }
        })
        authaxios.get('http://localhost:8080/customer/deletePurchaseCoupon/')
        notify.success(SccMsg.COUPON_DELETE_SUCCESS)
        props.deleteCompanyHandler(props.id);
        
        

    }

    return (

        <div>
            <button onClick={deletePurchaseCouponHandler}>Delete Coupon</button>
        </div>

    );
}

export default DeletePurchaseCoupon;