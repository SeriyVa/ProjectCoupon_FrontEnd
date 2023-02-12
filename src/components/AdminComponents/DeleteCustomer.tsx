import axios from "axios"
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import notify, { SccMsg } from '../../services/Notification';



type customer = {

    id: number,
    name: string
    deleteCustomerHandler: (id: number) => void

}


const DeleteCustomer = (props: customer) => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);

    const deleteCustomer = async () => {
        const authaxios = axios.create({
            baseURL: 'http://localhost:3000',
            headers: { Authorization: token }
        })
        await authaxios.delete('http://localhost:8080/admin/deleteCustomer/' + props.id)
        props.deleteCustomerHandler(props.id);
        notify.success(SccMsg.CUSTOMER_DELETE_SUCCESS);




    }



    return (
        <div>
            <button onClick={deleteCustomer}>delete</button>
        </div>
    )
}

export default DeleteCustomer;