import React from "react";
import ToDoList from "./ToDoList";

const ChallengesCard = () => {
    return(
        <div className="h-[544px] w-[320px] mt-8">
            <p className="text-[22px] ms-5 font-semibold dark:text-white">Challenges</p>
            <div className="h-[470px] w-[400px] bg-[#F0F0F0] hover:bg-[#e3e3e3] dark:bg-[#3F3F3F] mt-2 flex justify-center ">
                <ToDoList />
            </div>
        </div>
    );
};

export default ChallengesCard;