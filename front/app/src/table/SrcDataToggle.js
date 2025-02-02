import React from 'react';
import {useState} from 'react';
import './SrcDataToggle.css';


function SrcDataToggle (props){

    const [whichActive, setActive] = useState('left');

    return (
       <div>
           <div
               className={ whichActive === 'left' ? 'leftActiveButton' : 'leftInactiveButton' }
               onClick={() => setActive(whichActive === 'left' ? 'right' : 'left')}
           >Остатки</div>
           <div
               className={ whichActive === 'right' ? 'rightActiveButton' : 'rightInactiveButton' }
               onClick={() => setActive(whichActive === 'left' ? 'right' : 'left')}
           >Продажи</div>
           <div className={'clearFix'}></div>
       </div>
    )
}

export default SrcDataToggle;