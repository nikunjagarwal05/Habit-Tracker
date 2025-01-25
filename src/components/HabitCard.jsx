import React from "react";
import ToDoList from "./ToDoList";

const HabitCard = () => {
    return(
        <div className="h-[544px] w-[320px] mt-8">
            <p className="text-[22px] ms-5 font-semibold dark:text-white">Habits</p>
            <div className="h-[470px] w-[400px] bg-[#F0F0F0] hover:bg-[#e3e3e3] dark:hover:bg-[#4a4949] dark:bg-[#3F3F3F] mt-2 flex justify-center ">
                <ToDoList />
                <div className="h-200px w-300px bg-black"></div>
            </div>
        </div>
    );
};

export default HabitCard;