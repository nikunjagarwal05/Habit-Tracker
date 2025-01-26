import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [placeholderText, setPlaceholderText] = useState("Add a Habit");

    const colors = ["#1C1C1C", "#35313D", "#514178", "#979188"];
    
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    // function getRandomColor() {
    //     const letters = "0123456789ABCDEF";
    //     let color = "#";
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    function addTask() {
        if (newTask.trim() !== "") {
            // setTasks((t) => [...t, { text: newTask, color: getRandomColor() }]);
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
            <div className="flex gap-3">
                <input type="text" placeholder={placeholderText} value={newTask} onChange={handleInputChange} className="outline-none hover:bg-[rgba(26,24,29,0.10)] h-14 focus:border-2 dark:focus:border-black dark:text-white dark:border-black border-[#514178] focus:border-[#514178] pl-2 text-sm font-medium placeholder:font-medium placeholder:text-xs bg-inherit w-80"/>
                <button className="h-14 w-16 bg-[#35313D] cursor-pointer hover:bg-black text-white" onClick={addTask}>Add</button>
            </div>

            <ol> {tasks.map((task, index) => (
                <li className="flex mt-3" key={index}>
                    <button className="h-14 w-16 bg-[#1C1C1C] text-white" onClick={() => deleteTask(index)}>
                        <i className="fa-solid fa-square-xmark"></i>
                    </button>

                    <div>
                        <span className="h-14 w-80 dark:text-white bg-[#979188] dark:bg-[#1c1c1c] text-black text-xs flex items-center pl-2 font-medium">
                        <div className="h-14 w-1 ml-[-40px] mr-10 " style={{ backgroundColor: colors[index % colors.length], }}/*</span>style={{ backgroundColor: task.color }}*/></div>{task.text}</span>
                    </div>

                    <button className="h-14 w-16 bg-[#1C1C1C] text-white">
                        <i className="fa-duotone fa-solid fa-square-check"></i>
                    </button>
                </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
