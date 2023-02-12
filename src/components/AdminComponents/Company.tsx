import './Company.css'
import DeleteCompany from './DeleteCompany'
import {  useState } from 'react';
import UpdateCompany from './UpdateCompany';


type props = {
    companies: company,
    deleteCompanyHandler: (id: number) => void
}


type company = {
    id: number,
    name: string,
    email: string,
    password: string
}

type newEmail = {
    newEmail: string
}


const Company = (props: props) => {

    const [updateOn, setUpdateOn] = useState<boolean>(false);
    const [updatedEmail, setUpdatedEmail] = useState<string>(props.companies.email);

    const updateCompanyOnHandler = () => {
        if (updateOn) {
            setUpdateOn(false)
        } else {
            setUpdateOn(true);
        }
    }

    const updateCompanyOffHandler = () => {

        setUpdateOn(false);
    }

    const updateCompanyEmail = (updatedEmail: string) => {

        setUpdatedEmail(updatedEmail);;

    }

    return (
        <div>
            {!updateOn ? <div className='company'>
                <li>
                    <div className='company_part'>{props.companies.id}</div>
                    <div className='company_part'>{props.companies.name}</div>
                    <div className='company_part'>{updatedEmail}</div>
                    <div className='company_part'>{props.companies.password}</div>

                    <button onClick={updateCompanyOnHandler}>update</button>
                    <DeleteCompany id={props.companies.id} name={props.companies.name} deleteCompanyHandler={props.deleteCompanyHandler} />
                </li>

            </div> : <div className='company_updateOn'><li>
                <div className='company_part'>{props.companies.id}</div>
                <div className='company_part'>{props.companies.name}</div>
                <div className='company_part'>{updatedEmail}</div>
                <div className='company_part'>{props.companies.password}</div>

                <button onClick={updateCompanyOnHandler}>update</button>
                <DeleteCompany id={props.companies.id} name={props.companies.name} deleteCompanyHandler={props.deleteCompanyHandler} />
            </li> <UpdateCompany updateCompanyOffHandler={updateCompanyOffHandler} companyId={props.companies.id} companyEmail={props.companies.email} updateCompanyEmail={updateCompanyEmail} /></div>}


        </div>


    );
}

export default Company;