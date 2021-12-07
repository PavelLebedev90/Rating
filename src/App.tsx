import React, {ChangeEvent, useState} from 'react';
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
            <Form/>
        </div>
    );
}

export default App;
type tasksType = Array<string>;

function Form(){
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<tasksType>([]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const addTask = () =>{
        tasks.push(inputValue);
        setTasks([...tasks])
        setInputValue('')
    }


    return(
        <div>
            <label>text:<input value={inputValue} onChange={onChangeHandler}/></label>
            <button onClick={addTask}>add</button>
            {tasks.map(m => <li>{m}</li>)}
        </div>
    )
}
