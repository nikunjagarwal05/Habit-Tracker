import React from "react";
import ToDoList from "./ToDoList";

const HabitCard = () => {

    return(
        <div className="h-[499px] w-96 mt-8">
            <p className="text-sm ms-5 font-semibold dark:text-white">Habits</p>
            <div className={`h-[470px] rounded-[20px] w-[400px] mt-2 flex justify-center bg-[url('assets/card-2.png')] dark:bg-[url('assets/card-dark.png')] bg-cover bg-left bg-[#e3e3e3] dark:hover:bg-[#4a4949] dark:bg-[#3F3F3F]`}>
                <ToDoList />
            </div>
        </div>
    );
};

export default HabitCard;