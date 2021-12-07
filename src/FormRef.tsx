import React, {useState} from 'react';

type tasksType = Array<string>;

export function FormRef() {

    const [tasks, setTasks] = useState<tasksType>([]);

    let refInput = React.createRef<HTMLInputElement>();

    const addTask = () => {
        if (refInput.current) {
            tasks.push(refInput.current.value);
            setTasks([...tasks])
            refInput.current.value = "";
        }

    }


    return (
        <div>
            <label>
                text:
                <input ref={refInput}/>
            </label>
            <button onClick={addTask}>add</button>
            {tasks.map(m => <li>{m}</li>)}
        </div>
    )
}