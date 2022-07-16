import React, {useEffect} from 'react';
import RepeatTable from '../components/RepeatTable';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';
import '../style/RepeatStyle.css'


const Repeat = function () {
    const {fetchRepeat} = useActions()
    let {repeat, isLoading} = useTypedSelector(store => store.repeat)
    useEffect(() => {
        fetchRepeat()
    }, [])
    return (
        <div className='repeat'>
            <RepeatTable repeat={repeat}/>
        </div>
    )
}

export default Repeat