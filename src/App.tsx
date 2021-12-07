import React, {useState} from 'react';
import './App.css';

type valueType = 0 | 1 |  2 | 3 | 4 | 5

function App() {
    const [value, setValue] = useState<valueType>(0)
    const chengeValue = (value: valueType) => {
      setValue(value);
    }
    return (
        <div className="App">
            <Stars value = {value}
                chengeValue = {chengeValue}
            />
        </div>
    );
}

export default App;

type StarsType = {
    value:valueType
    chengeValue: (value: valueType) => void
}

function Stars(props:StarsType) {
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
type StarType = {
    // value:valueType
    checked: boolean
    chengeValue: () => void
}

function Star(props:StarType) {
    return  <span onClick={props.chengeValue}>{props.checked? <b>Star </b>: "Star "}</span>

}