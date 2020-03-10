import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const listOfTask = [
    {des: "Hello World", needToDo: true}
];

const ToDoList = () => {
    const [des, setDes] = useState("");
    const [task,setTask] = useState(listOfTask);

    const addTask = event => {
        event.preventDefault();
        let newTask = {des, needToDo: true};
        setTask([...task,newTask]);
    }
    const toggleNeedToDo = i =>{
        let temp = [...task];
        temp[i].needToDo = !temp[i].needToDo;
        setTask(temp);

    }
    const deleteTask = i => {
        let temp = [...task];
        temp.splice(i, 1);
        setTask(temp);
    }

    return(
        <div className = "form-group">
            <form onSubmit = {addTask} className = 'form-check'>
                <p>Enter Task<input type="text" name= "des" onChange= {event =>setDes(event.target.value)}/></p>
                <input type="submit" value = "Add"/>
            </form>

            {task.map((tasks, i) =>
                <ul key = {i} className={tasks.needToDo?"":"have"}>
                {
                    tasks.needToDo ?
                    <input type = "checkbox" onClick = {e => toggleNeedToDo(i)}/>:
                    <input type = "checkbox" onClick = {e => toggleNeedToDo(i)}/>
                }
                {tasks.des}
                <button key = {i} onClick = {e => deleteTask(i)}>Delete</button>
                </ul> 
            )}
        </div>
    )
}

export default ToDoList