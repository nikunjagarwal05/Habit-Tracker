import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [placeholderText, setPlaceholderText] = useState("Add a Habit");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }
    
    return( 
        <div className="h-[55px] w-[380px] m-[18px] bg-[rgba(26,24,29,0.06)]">
            <div className="flex gap-3">
                <input type="text" placeholder={placeholderText}
                        value={newTask} onChange={handleInputChange} className="outline-none hover:bg-[rgba(26,24,29,0.10)] h-[55px] focus:border-[2px] focus:border-[#514178] pl-[9px] text-[19px] font-medium placeholder:font-medium placeholder:text-[19px] bg-inherit w-[310px]" />
                <button className="h-[55px] w-[60px] bg-[#35313D] cursor-pointer hover:bg-black text-white" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li className="flex mt-3" key={index}>
                        <button className="h-[50px] w-[60px] bg-black text-white" onClick={() => handleUnfinishedTasks(1)}>
                            <i class="fa-solid fa-square-xmark"></i>
                        </button>
                        <span className='h-[50px] w-[320px] bg-[#979188] text-black text-[17px] flex items-center pl-2 font-medium'>{task}</span>
                        <button className='h-[50px] w-[60px] bg-[black] text-white' onClick={() => handleCompletion(10,5)}>
                            <i class="fa-duotone fa-solid fa-square-check"></i>
                        </button>
                    </li>)}
            </ol>
        </div>);
}
export default ToDoList