import {Star} from './Star';
import React from 'react';
import {valueType} from './App';

type StarsType = {
    value: valueType
    chengeValue: (value: valueType) => void
}

export function Stars(props: StarsType) {
    const callBack = (value: valueType) => {
        props.chengeValue(value);
    }
    return (
        <div>
            <Star checked={props.value > 0} chengeValue={() => callBack(1)}/>
            <Star checked={props.value > 1} chengeValue={() => callBack(2)}/>
            <Star checked={props.value > 2} chengeValue={() => callBack(3)}/>
            <Star checked={props.value > 3} chengeValue={() => callBack(4)}/>
            <Star checked={props.value > 4} chengeValue={() => callBack(5)}/>
        </div>
    )
}