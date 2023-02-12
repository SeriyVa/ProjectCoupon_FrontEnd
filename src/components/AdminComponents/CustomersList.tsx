import { Fragment, useState, useEffect } from 'react';
import './CustomersList.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/Index';
import Customer from './Customer';
import image2 from '../../images/stars4.jpg'




type customer = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const CustomersList = () => {

    const token = useSelector<RootState, string>(state => state.auth.userDetails.token);




    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const authaxios = axios.create({
            baseURL: 'http://localhost:3000',
            headers: { Authorization: token }
        })
        authaxios.get('http://localhost:8080/admin/getAllCustomers')
            .then((response) => {
                setCustomers(response.data)
            }
            )

    }, [])



    const deleteCustomerHandler = (id: number) => {
        const newList = customers.filter((customer: customer) => customer.id !== id)
        setCustomers(newList)
    }


    const oneCustomer = customers.map((oneCustomer: customer) => { return <Customer key={oneCustomer.id} customer={oneCustomer} deleteCustomerHandler={deleteCustomerHandler}></Customer> })
    return (
        <div className='customer_List'>
            <div className='boxHeader'><p>Customers List</p> <img className="image1" src={image2} alt="" /></div>
            <div className='customers_list_box'>
                {oneCustomer}
            </div>
        </div>
    )
}

export default CustomersList;