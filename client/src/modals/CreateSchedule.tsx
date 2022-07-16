import React, {FC, useRef, useState} from 'react';
import Input from '../UI/button/input/Input';
import Button from '../UI/button/Button'
import './ModalStyle.css'
import {ISchedule} from '../models/userModel'

interface CreateScheduleProps {
    hide: boolean,
    ref?: any
}


const CreateSchedule: FC<CreateScheduleProps> = React.forwardRef(function ({hide}, ref: any) {


    const [list, setList] = useState<string[]>(["", "", "", ""]);
    let [schedule, setSchedule] = useState<ISchedule>([]);
    let [type, setType] = useState('learn')
    let [countBack, setCountBack] = useState(0);
    let [hides, setHides] = useState(false)
    let [claster, setClaster] = useState(0)
    let isRef = useRef(null) as any;

    function addTypeSchedule() {
        ref.current.focus();
        setHides(false)
        setClassNames('formListCreateSchedule formListCreateScheduleTurn');
        setTimeout(() => {
            setSchedule(schedule.map((schedule: any, index: number) => {
                if (index === countBack) {
                    return {type, lists: list}
                }
                return schedule
            }));
            setClaster(countBack)
            setCountBack(++countBack)
            if (!schedule[countBack]) {
                setSchedule([...schedule, {type, lists: list}])
            }
            setList(schedule[countBack] ? schedule[countBack].lists : ['', '', '', ''])
            setClassNames('formListCreateSchedule');
        }, 1000)
        console.log(schedule)
        console.log(countBack)

    }

    function backTypeSchedule() {
        setCountBack(countBack > 0 ? --countBack : 0);
        setClaster(countBack)
        setClassNames('formListCreateSchedule formListCreateScheduleTurn',);
        let data = schedule[countBack];
        setTimeout(() => {
            setList(data ? data.lists : list);
            setClassNames('formListCreateSchedule');
        }, 1000)
    }

    enum listClass {
        noTurn = 'formListCreateSchedule',
        torn = 'formListCreateSchedule formListCreateScheduleTurn',
        TurnBack = 'formListCreateSchedule formListCreateScheduleTurnBack'
    }

    let [classNames, setClassNames] = useState<string>('formListCreateSchedule')

    function hidesFunction() {
        isRef?.current?.focus()
        if (schedule[countBack + 1]) {
            return addTypeSchedule()
        }
        setHides(true)
    }

    function changeList(index: number) {
        setClaster(index)
        setList(schedule[index].lists);

    }

    if (!hide) {
        return null
    }
    return (
        <div className="createSchedule">
            <div className={classNames}
                 onClick={(e) => e.stopPropagation()}>
                <div className="div_go_img">
                    <img className="go_img" onClick={backTypeSchedule}
                         src={require('./img/5a1c783d4c4ec7.9275442515118152293126.png')}/>
                    <img className=' go_img' onClick={hidesFunction}
                         src={require('./img/kisspng-arrow-button-icon-right-arrow-transparent-background-5a77bc2a82ed16.7252492515177963945363.png')}/>
                </div>
                <h2 style={{alignSelf: "flex-start"}}>Schedule list</h2>
                <h3>{type} </h3>
                {list.map((willDo, ind) =>
                    <div>
                        <Input value={willDo} ref={ind === 0 ? ref : null} key={ind}
                               onChange={(e) => {
                                   setList(list.map((item, index) => index === ind ? e.target.value : item))
                               }}/>
                        <Button
                            onClick={() => {
                                setList(list.filter((item, index) => index !== ind))
                            }}>
                            Delete</Button>
                    </div>
                )}
                <Button onClick={() => {
                    setList([...list, ''])
                }}>add pole</Button>

            </div>
            {hides ?
                <div ref={isRef} onKeyDown={(e) => e.key == "Enter" ? addTypeSchedule() : null} onClick={(e) => {
                    e.stopPropagation()
                }} className="createType">
                    <Input value={type} onChange={(e) => setType(e.target.value)}/>
                    <Button onClick={() => {
                        addTypeSchedule()
                    }}>next</Button>
                </div>
                : null
            }
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="leftMenuSchedule">
                {schedule.map((schedu: any, index: number) =>
                    <div onClick={() => {
                        changeList(index)
                    }}
                         className={index === claster ? 'selectListLeftMenuSchedule' : 'listLeftMenuSchedule'}>
                        {schedu.type}</div>
                )}
            </div>
        </div>

    )
})

export default CreateSchedule