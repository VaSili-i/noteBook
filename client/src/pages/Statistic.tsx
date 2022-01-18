import React from 'react';

const Statistic = function () {

    return (
        <div>
            <input type='text' onKeyPress={(e) => console.log(e.key)}></input>

        </div>
    )
}

export default Statistic