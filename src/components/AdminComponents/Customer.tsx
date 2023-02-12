import { useState } from 'react'
import './Customer.css'
import DeleteCustomer from './DeleteCustomer'
import UpdateCustomer from './UpdateCustomer'



type props = {
    customer: customer
    deleteCustomerHandler: (id: number) => void
}


type customer = {
    id: number,
    firstName: string,
    lastName: string
    email: string,
    password: string
}



const Customer = (props: props) => {

    const [updateOn, setUpdateOn] = useState<boolean>(false);
    const [updatedEmail, setUpdatedEmail] = useState<string>(props.customer.email);
    const [updatedFirstName, setUpdatedFirstName] = useState<string>(props.customer.firstName);
    const [updatedLastName, setUpdatedLastName] = useState<string>(props.customer.lastName);


    const updateCustomerOnHandler = () => {
        if (updateOn) {
            setUpdateOn(false)
        } else {
            setUpdateOn(true);
        }
    }

    const updateCustomerOffHandler = () => {

        setUpdateOn(false);
    }

    const updateCustomerEmail = (updatedEmail: string, updatedFirstName: string, updatedLastName: string) => {

        setUpdatedEmail(updatedEmail);
        setUpdatedFirstName(updatedFirstName);
        setUpdatedLastName(updatedLastName);

    }

    return (
        <div>
            {!updateOn ? <div className='customer'>
                <li>
                    <div className='customer_part'>{props.customer.id}</div>
                    <div className='customer_part'>{updatedFirstName}</div>
                    <div className='customer_part'>{updatedLastName}</div>
                    <div className='customer_part'>{updatedEmail}</div>
                    <div className='customer_part'>{props.customer.password}</div>

                    <button onClick={updateCustomerOnHandler}>update</button>
                    <DeleteCustomer key={props.customer.id} id={props.customer.id} name={props.customer.firstName} deleteCustomerHandler={props.deleteCustomerHandler} />
                </li>
            </div> : <div className='customer_updateOn'>
                <li>
                    <div className='customer_part'>{props.customer.id}</div>
                    <div className='customer_part'>{updatedFirstName}</div>
                    <div className='customer_part'>{updatedLastName}</div>
                    <div className='customer_part'>{updatedEmail}</div>
                    <div className='customer_part'>{props.customer.password}</div>

                    <button onClick={updateCustomerOnHandler}>update</button>
                    <DeleteCustomer key={props.customer.id} id={props.customer.id} name={props.customer.firstName} deleteCustomerHandler={props.deleteCustomerHandler} />
                </li> <UpdateCustomer customerEmail={props.customer.email} customerId={props.customer.id} updateCustomerEmail={updateCustomerEmail} updateCustomerOffHandler={updateCustomerOffHandler} /> </div>}

        </div>
    );
}

export default Customer;