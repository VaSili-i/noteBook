import React, {useState} from 'react';
import Input from "../../UI/button/input/Input";

const ModalPurpose = function () {
    const [tasks, setTasks] = useState(['']);

    return (
        <div className='createSchedule'>
            <div>
                {tasks.map(task =>
                    <Input value={task}
                           onChange={(e) => setTasks([...tasks, e.target.value])}/>
                )}
            </div>
        </div>
    );
};

export default ModalPurpose;