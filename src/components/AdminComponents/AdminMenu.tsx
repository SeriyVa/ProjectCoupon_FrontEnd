import './AdminMenu.css';
import { Link, NavLink } from 'react-router-dom';


const AdminMenu = () => {



  return (

    <div className='admin_menu'>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName='active' to='/admin/welcome'>Admin</NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/admin/addCompany'>Add Company</NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/admin/companiesList' >Companies List</NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/admin/addCustomer'>Add Customer</NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/admin/getAllCustomers'>Customers List</NavLink>
          </li>


        </ul>

      </nav>


    </div>
  );
}

export default AdminMenu;