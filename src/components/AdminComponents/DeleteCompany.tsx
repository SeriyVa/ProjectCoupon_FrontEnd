import axios from "axios"
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import notify, { SccMsg } from '../../services/Notification';


type company = {

    id: number,
    name: string
    deleteCompanyHandler: (id: number) => void

}


const DeleteCompany = (props: company) => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);

    const deleteCompany = async () => {
        const authaxios = axios.create({
            baseURL: 'http://localhost:3000',
            headers: { Authorization: token }
        })
        await authaxios.delete('http://localhost:8080/admin/deleteCompany/' + props.id)
        notify.success(SccMsg.COMPANY_DELETE_SUCCESS);
        props.deleteCompanyHandler(props.id);



    }



    return (
        <div>
            <button onClick={deleteCompany}>delete</button>
        </div>
    )
}

export default DeleteCompany;