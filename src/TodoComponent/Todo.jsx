import React, { useState} from 'react'

function Todo() {
    const [task, setTask] = useState(["me","you"]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        if (newTask.trim() !== "" ) {
            setTask([...task, newTask]);
             setNewTask("");
            
        }

    }

    function deleteTask(index){
        const newTaskList = [...task];
        newTaskList.splice(index, 1);
        setTask(newTaskList);



    
    }

  return (
    <div className='todolist'>
        <h1>Todo List</h1>
        <div className='add'> 
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task"/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
            {task.map((item, index) => 
            <li key ={index}>
                <span>  {item}</span>
                <button onClick={() => deleteTask(index)}>Done</button>

                </li>
           )}
        </ul>

    </div>
  )
}

export default Todo

