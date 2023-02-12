import './CustomerMenu.css';
import { Link, NavLink } from 'react-router-dom';


const CustomerMenu = () => {



  return (

    <div className='customer_menu'>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName='active' to='/customer/welcome'>Customer</NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/customer/addPurchaseCoupon'>Buy A new Coupon</NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/customer/customerCoupons' >My Coupouns</NavLink>
          </li>

        </ul>

      </nav>


    </div>
  );
}

export default CustomerMenu;