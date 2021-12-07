import React, {useState} from 'react';
import './App.css';
import {Stars} from './Stars';
import {Form} from './Form';

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
            <Form/>
        </div>
    );
}

export default App;

