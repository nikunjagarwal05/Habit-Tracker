import React, { useState } from "react";

function ToDoList({description}) {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const colors = ["#B82132", "#A35C7A", "#809D3C", "#979188"];
    
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, { text: newTask }]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

    return (
        <div className="h-14 w-96 m-4 bg-[rgba(26,24,29,0.06)]">
            <div className="flex bg-transparent rounded-[10px]">
                <input type="text" placeholder={`${description}`} value={newTask} onChange={handleInputChange} className="outline-none rounded-l-[10px] hover:bg-[rgba(26,24,29,0.10)] h-14 dark:text-white border-[#514178] focus:border-[#514178] pl-2 text-sm font-medium placeholder:font-medium placeholder:text-xs bg-inherit w-80"/>
                <button className="h-14 w-16 bg-[#35313D] cursor-pointer rounded-[8px] hover:bg-black text-white" onClick={addTask}>Add</button>
            </div>

            <ol> {tasks.map((task, index) => (
                <li className="flex mt-3" key={index}>
                    <button className="h-14 w-16 rounded-l-[10px] flex justify-center items-center bg-[#1C1C1C] text-white" onClick={() => deleteTask(index)}>
                        <i className="fa-solid fa-square-xmark"></i>
                    </button>

                    <div>
                        <span className="h-14 w-72 backdrop-blur-lg hover:bg-white dark:hover:bg-black dark:text-white text-black text-xs flex items-center pl-2 font-medium">
                        <div className="h-14 w-2 rounded-l-[10px] ml-[-56px] mr-14" style={{ backgroundColor: colors[index % colors.length], }}></div>{task.text}</span>
                    </div>

                    <button className="h-14 w-16 rounded-r-[10px] flex justify-center items-center bg-[#1C1C1C] text-white"> 
                        <p className="mt-[-10px]">✔️</p>
                    </button>
                </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
