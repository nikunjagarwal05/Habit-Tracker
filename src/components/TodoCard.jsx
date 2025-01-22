import React, { useState } from "react";
import ToDoList from "./ToDoList";

const ToDoCard = () => {
    return(
        <div className="h-[544px] w-[320px] mt-8">
            <p className="text-[22px] ms-5 font-semibold dark:text-white">To Do's</p>
            <div className="h-[470px] w-[400px] bg-[#F0F0F0] dark:hover:bg-[#4a4949] hover:bg-[#e3e3e3] dark:bg-[#3F3F3F] mt-2 flex justify-center ">
                <ToDoList />
            </div>
        </div>
    );
};

export default ToDoCard;