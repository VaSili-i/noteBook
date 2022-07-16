import React, {FC} from 'react';
import {markAsUntransferable} from 'worker_threads';
import {IRepeat} from '../models/repeatModule';

interface IRepeatTable {
    repeat: IRepeat[]
}

const RepeatTable: FC<IRepeatTable> = function ({repeat},) {

    function mounth() {
        let dayMonth = 0;
        let mounthFull: [string, ...number[]] = ['list day'];
        return function addDay(): [string, ...number[]] {
            mounthFull.push(++dayMonth)
            return dayMonth === 31 ? mounthFull : addDay()
        }
    }

    let dateF: [string, ...number[]] = mounth()();

    return (
        <table className="table">
            <caption> Stati table</caption>
            <thead className='headTable'>
            <tr>
                {dateF.map((date) =>
                    <td>{date}</td>
                )}
            </tr>
            </thead>
            {repeat.map(({subject, done, ball}) =>
                <tbody>
                <tr>
                    <td>{subject}
                        <select>
                            <option>f</option>
                        </select>
                    </td>

                    <td>{done}</td>
                    <td>{ball}</td>
                </tr>
                </tbody>
            )}
        </table>
    )
}

export default RepeatTable