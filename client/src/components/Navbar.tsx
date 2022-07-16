import React from 'react';
import {REGISTRATION, LOGIN, SCHEDULE, STATISTIC, REPEAT, PURPOSE} from '../utils/consts';
import {Link, useNavigate} from 'react-router-dom';
import '../style/NavbarStyle.css'
import Button from '../UI/button/Button';
import {useTypedSelector} from '../hooks/useTypedSelector';


const Navbar = function () {

    let navigate = useNavigate();
    let {isAuth, user} = useTypedSelector(store => store.user);

    return (
        isAuth ?
            <div className="navbar">
                <Link className='link' to={SCHEDULE}>Mine</Link>
                <Link className='link' to={SCHEDULE}>SCHEDULE</Link>
                <Link className='link' to={STATISTIC}>STATISTIC</Link>
                <Link className='link' to={REPEAT}>REPEAT</Link>
                <Link className='link' to={PURPOSE}>PURPOSE</Link>
                <div className="div_button">
                    <div>{user.name ?? 'dont'}</div>
                    <Button onClick={() => {
                        navigate(REGISTRATION)
                    }}>OUT</Button>
                    <Button onClick={() => {
                        navigate(LOGIN)
                    }}>ADMIN</Button>
                </div>
            </div>
            :
            <div className="navbar">
                <Link className='link' to={SCHEDULE}>Mine</Link>


                <div className="div_button">
                    <Button onClick={() => {
                        navigate(REGISTRATION)
                    }}>REGISTRA</Button>
                    <Button onClick={() => {
                        navigate(LOGIN)
                    }}>LOGIN</Button>
                    <div>no avtorization</div>
                </div>
            </div>
    )
}
export default Navbar