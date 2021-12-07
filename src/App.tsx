import React, {useState} from 'react';
import './App.css';
import {Stars} from './Stars';

export type valueType = 0 | 1 | 2 | 3 | 4 | 5

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

