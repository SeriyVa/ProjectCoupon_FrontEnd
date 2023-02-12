import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './LoginComponents/Login';
import AddCompany from './AdminComponents/AddCompany';
import AdminMenu from './AdminComponents/AdminMenu';
import CompaniesList from './AdminComponents/CompaniesList';
import './Navigation.css';
import AdminHome from './AdminComponents/AdminHome';
import AddCustomer from './AdminComponents/AddCustomer';
import CustomersList from './AdminComponents/CustomersList';
import CompanyMenu from './CompanyComponents/CompanyMenu';
import CompanyHome from './CompanyComponents/CompanyHome';
import AddCoupon from './CompanyComponents/AddCoupon';
import CompanyCouponsList from './CompanyComponents/CompanyCouponsList';
import CustomerMenu from './CustomerComponents/CustomerMenu';
import AllCouponsList from './CustomerComponents/AllCouponsList';
import CustomerCouponsList from './CustomerComponents/CustomerCouponsList';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Index';



const Navigation = () => {

  const clientType = useSelector<RootState, string>(state => state.auth.userDetails.clientType);



  return (
    <nav>
      <Switch>
        <Route path='/' exact>
          <Redirect to={'home'} ></Redirect>
        </Route>
        <Route path={'/home'} exact>
          <Home />
        </Route>

        <Route path={'/login'} exact>
          <Login />
        </Route>

        <Route path={'/admin/welcome'} exact>
          <div className='menu'>
            <div className='body1'><AdminMenu /></div>
            <div className='body2'><AdminHome /></div>

          </div>
        </Route>
        <Route path={'/admin/addCompany'} exact>
          
            <div className='menu'>
              <div className='body1'><AdminMenu /></div>
              <div className='body2'><AddCompany /></div>
            </div>
        </Route>
        <Route path={'/admin/companiesList'} exact>
          
            <div className='menu'>
              <div className='body1'><AdminMenu /></div>
              <div className='body2'><CompaniesList /></div>
            </div> 
        </Route>
        <Route path={'/admin/addCustomer'} exact>
          
            <div className='menu'>
              <div className='body1'><AdminMenu /></div>
              <div className='body2'><AddCustomer /></div>
            </div>
        </Route>
        <Route path={'/admin/getAllCustomers'} exact>
          
            <div className='menu'>
              <div className='body1'><AdminMenu /></div>
              <div className='body2'><CustomersList /></div>
            </div>
           
        </Route>
        <Route path={'/company/welcome'} exact>
          
            <div className='menu'>
              <div className='body1'><CompanyMenu /></div>
              <div className='body2'><CompanyHome /></div>
            </div> 
        </Route>
        <Route path={'/company/addCoupon'} exact>
          
            <div className='menu'>
              <div className='body1'><CompanyMenu /></div>
              <div className='body2'><AddCoupon /></div>
            </div> 
        </Route>
        <Route path={'/company/couponsList'} exact>
         
            <div className='menu'>
              <div className='body1'><CompanyMenu /></div>
              <div className='body2'><CompanyCouponsList /></div>
            </div>
        </Route>
        <Route path={'/customer/welcome'} exact>
          
            <div className='menu'>
              <div className='body1'><CustomerMenu /></div>
              <div className='body2'></div>
            </div> 
        </Route>
        <Route path={'/customer/addPurchaseCoupon'} exact>
          
            <div className='menu'>
              <div className='body1'><CustomerMenu /></div>
              <div className='body2'><AllCouponsList /></div>
            </div>
        </Route>
        <Route path={'/customer/customerCoupons'} exact>
          
            <div className='menu'>
              <div className='body1'><CustomerMenu /></div>
              <div className='body2'><CustomerCouponsList /></div>
            </div> 
        </Route>
      </Switch>


    </nav>
  );
}

export default Navigation;