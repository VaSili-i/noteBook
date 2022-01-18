import React, { FC, useState } from 'react';
import Input from '../UI/button/input/Input'

interface IAddType {
    hides: boolean
}


let i = 9;
3..toFixed(30);
3..toString(32);
Math.ceil(343.23);
Math.floor(34.9)
Math.trunc(34.2)
Math.round(32.6)
Math.max(3, 4,);
Math.min(2, 3,);
Math.random();
isNaN(3);
isFinite(32);

console.log(typeof parseFloat('3423.32ff'));
console.log(typeof parseInt('3423.32ff', 42));


let str = '123456789';

str.toString()
str.toUpperCase();
str.substr(3, 3)
'e'.substring

str.includes('2', 1);
str.indexOf('1', 1);
str.lastIndexOf('3', 1);
str.localeCompare('24');
str.charAt(3);
str[2];
str.length;
str.startsWith('1')
str.endsWith('1')
str.codePointAt(0);
String.fromCodePoint(3)





















const AddType: FC<IAddType> = function ({ hides }) {
    let [type, setType] = useState('');

    if (hides) {
        return null
    }
    return (
        <Input value={type} onChange={(e) => setType(e.target.value)} />
    );
};

export default AddType