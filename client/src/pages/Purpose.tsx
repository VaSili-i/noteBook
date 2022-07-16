import React, {useState} from 'react';
import '../style/GeneralStyle.css';
import {useNavigate} from "react-router-dom";
import {PURPOSE_SMART} from "../utils/consts";
import ModalPurpose from "../components/purpose/ModalPurpose";

const Purpose = function () {
    const [tactics, setTactics] = useState(['SMART']);
    const navigate = useNavigate();

    return (
        <div className='blue_gradient'>
            <div className='menu_block_knowledge'>
                {tactics.map(tact =>
                    <div onClick={() => navigate(PURPOSE_SMART)} className='block_knowledge'>
                        {tact}
                    </div>
                )}
            </div>

            <ModalPurpose/>
        </div>
    )
};

export default Purpose;