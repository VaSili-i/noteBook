import React, { ForwardedRef, useRef, useState } from 'react';
import '../style/ScheduleStyle.css';
import CreateSchedule from '../modals/CreateSchedule';
import Button from '../UI/button/Button';


const Schedule = function () {
    let refInput = useRef(null) as any;

    let [hide, setHide] = useState(false)

    function setIsHide(e: any) {
        e.stopPropagation()
        setHide(true);
        setTimeout(() => refInput.current.focus(), 0)
    }


    return (
        <div onClick={() => (setHide(false))}
            className="schedule">
            <Button onClick={(e) => { setIsHide(e) }}>Schedule</Button>
            <CreateSchedule ref={refInput} hide={hide} />
        </div>
    )
}

export default Schedule