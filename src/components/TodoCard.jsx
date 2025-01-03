import React from "react";

const ToDoCard = () => {
    return(
        <div className="h-[444px] w-[320px] mt-[32px]">
            <p className="text-[22px] ms-[18px] font-semibold">To Do's</p>
            <div className="h-[403px] w-[320px] bg-[#D9D9D9] mt-[10px] flex justify-center ">
                <div className="bg-[#A9A5A5] h-[55px] w-[287px] mt-[18px] flex items-center">
                    <p className="text-[19px] mx-[9px] font-medium">Add a To Do</p>
                </div>
            </div>
        </div>
    );
};

export default ToDoCard;