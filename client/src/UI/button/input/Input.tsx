import React, { ChangeEvent, FC } from 'react';
import './InputStyle.css'

interface InputProps {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    params?: any,
    ref?: any,
}

const Input: FC<InputProps> = React.forwardRef(function ({ value, onChange, params }, ref) {

    return (
        <input ref={ref} {...params} onChange={onChange} value={value} className="input" />
    )
})

export default Input