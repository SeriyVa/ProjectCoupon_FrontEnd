import './CompanyMenu.css';
import { Link, NavLink } from 'react-router-dom';


const CompanyMenu = () => {



  return (

    <div className='company_menu'>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName='active' to='/company/welcome'>Company</NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/company/addCoupon'>Add Coupon</NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/company/couponsList' >Coupons List</NavLink>
          </li>

        </ul>

      </nav>


    </div>
  );
}

export default CompanyMenu;