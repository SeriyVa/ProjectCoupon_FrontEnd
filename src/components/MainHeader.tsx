
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './MainHeader.css';
import { RootState } from '../Store/Index'
import { loginAction } from '../Store/LoginStatus'
import { authAction } from '../Store/Auth';
import { useHistory } from 'react-router-dom';



const MainHeader = () => {

  const isLoggedIn = useSelector<RootState, boolean>(state => state.loginStatus.loginStatus);

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(loginAction.logout());
    dispatch(authAction.logout());
    history.push('/home');
  }


  return (

    <header className='header'>
      <p className='p'><span className='span'>Project Coupon </span><br /> by Sergey Vaseniov</p>

      <nav>
        <ul>
          {!isLoggedIn && <li> <NavLink activeClassName='active' to='/home'>Home</NavLink></li>}
          {!isLoggedIn && <li><NavLink activeClassName='active' to='/Login'>login</NavLink> </li>}
          {isLoggedIn && <li><button onClick={logout}>logout</button></li>}

        </ul>
      </nav>

    </header>
  );
}

export default MainHeader;

