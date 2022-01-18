import React, { useState } from 'react';
import '../style/AuthStyle.css'
import Button from '../UI/button/Button';
import Input from '../UI/button/input/Input';
import { useLocation } from 'react-router-dom';
import { LOGIN } from '../utils/consts';
import { useActions } from '../hooks/useActions';

const Auth = function () {
    const { login, registration } = useActions()

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const isLogin = location.pathname === LOGIN;

    function authAction(e: MouseEvent) {
        e.preventDefault()
        if (isLogin) {
            login({ name, password })
        } else {
            registration({ name, password })
        }
    }
    return (
        <div className='auth'>
            <form className='form'>
                <h4>{isLogin ? 'Login' : 'Registration'}</h4>
                <Input params={{ placeholder: 'name' }} value={name} onChange={(e) => setName(e.target.value)} />
                <Input params={{ placeholder: 'password' }} value={password} onChange={(e) => setPassword(e.target.value)} />

                <Button onClick={(e) => { authAction(e) }}>sudmit</Button>
            </form>

        </div>
    )
}

export default Auth