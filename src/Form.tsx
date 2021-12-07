import React, {ChangeEvent, useState} from 'react';

type tasksType = Array<string>;

export function Form() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<tasksType>([]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }

    const addTask = () => {
        tasks.push(inputValue);
        setTasks([...tasks])
        setInputValue('')
    }


    return (
        <div>
            <label>text:<input value={inputValue} onChange={onChangeHandler}/></label>
            <button onClick={addTask}>add</button>
            {tasks.map(m => <li>{m}</li>)}
        </div>
    )
}