import React, { FC } from 'react';
import './ButtonStyle.css';

interface ButtonProps {
    onClick: (e: any) => void
}

const Button: FC<ButtonProps> = function ({ children, onClick }) {
    return (
        <button onClick={onClick} className='button'>
            {children}
        </button>
    )
}

export default Button