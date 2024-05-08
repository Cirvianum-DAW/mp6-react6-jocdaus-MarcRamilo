
// Path: src/DiceList.jsx   

import React from 'react';
import Dice from './Dice';

const DiceList = (props) => {
    return (
        <div>
            {props.numbers.map((number, index) => <Dice key={index} number={number} />)}
        </div>
    );
}

export default DiceList;