import { Fragment, useState, useEffect } from 'react';
import './CompaniesList.css'
import axios from 'axios';
import Company from './Company';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/Index';
import image2 from '../../images/stars4.jpg'






type company = {
    id: number,
    name: string,
    email: string,
    password: string
}

const CompaniesList = () => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);

    const [companies, setCompanies] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
        const authaxios = axios.create({
            baseURL: 'http://localhost:3000',
            headers: { Authorization: token }
        })
        authaxios.get('http://localhost:8080/admin/getAllCompanies')
            .then((response) => {
                const newData = response.data
                console.log(response.data);
                setCompanies(response.data)
            }
            )
    }, [])





    const deleteCompanyHandler = (id: number) => {
        const newList = companies.filter((company: company) => company.id !== id)
        setCompanies(newList)
    }


    const oneCompany = companies.map((oneCompany: company) => { return <Company key={oneCompany.id} companies={oneCompany} deleteCompanyHandler={deleteCompanyHandler}></Company> })
    return (
        <div className='companiesList'>
             <div className='boxHeader'><p>Companies List</p> <img className="image1" src={image2} alt="" /></div>
            
            <div className='companies_list_box'>
                {oneCompany}
            </div>
        </div>
    )
}

export default CompaniesList;