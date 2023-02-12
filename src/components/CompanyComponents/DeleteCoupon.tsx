import axios from "axios"
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import notify, { SccMsg } from "../../services/Notification";



type coupon = {

    id: number,
    name: string
    deleteCouponHandler?: (id: number) => void 

}


const DeleteCoupon = (props: coupon) => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);
    const companyId = useSelector<RootState, string>(state => state.auth.userDetails.id);
    // const clientType = useSelector<RootState, string>(state=>state.auth.userDetails.)


    const deleteCoupon = async () => {
        try {
            const authaxios = axios.create({
                baseURL: 'http://localhost:3000',
                headers: { Authorization: token, companyId: companyId }
            })
            await authaxios.delete('http://localhost:8080/company/deleteCoupon/' + props.id)
            props.deleteCouponHandler && props.deleteCouponHandler(props.id);
            notify.success(SccMsg.COUPON_DELETE_SUCCESS)
        } catch (err: any) {
            notify.error(err)
        }
        // props.deleteCouponHandler(props.id);
    }



    return (
        <div>
            <button onClick={deleteCoupon}>delete</button>
        </div>
    )
}

export default DeleteCoupon;