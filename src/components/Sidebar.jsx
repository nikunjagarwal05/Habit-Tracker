import React from "react";

const Sidebar = () => {
    return(
        <div className="h-[225px] w-full bg-[rgba(81,65,120,0.81)] flex justify-start items-center">

            <div className="h-[167px] w-[274px] bg-[#D9D9D9] ms-[144px] rounded-[17px]">
                <p className="text-[33px] text-[#5B4F4F] font-semibold px-[12px] py-[10px]">Good<br />Morning,</p>
                <p className="text-[19px] px-[12px]">user.</p>
            </div>

            <div className="h-[167px] w-[579px] bg-[#D9D9D9] rounded-[19px] pl-[80px] ms-[81px] gap-5 flex flex-col justify-center items-center">
                <div className="h-[25px] w-[421px] bg-[#8F8B8B]">
                    <div className="h-[25px] w-[300px] bg-[#5B4F4F]"></div>
                </div>
                <div className="h-[25px] w-[421px] bg-[#8F8B8B]">
                    <div className="h-[25px] w-[148px] bg-[#5B4F4F]"></div>
                </div>
            </div>

            <div className="h-[167px] w-[167px] ms-[81px] bg-[#D9D9D9] rounded-[17px]">
                <p className="text-[22px] font-medium ms-[20px] mt-[20px]">Level</p>
                <p className="text-[87px] font-semibold text-[#5B4F4F] mt-[-10px] text-center">10</p>
            </div>

            <div className="w-[168px] h-[167px] bg-[#675B83] rounded-[26px] ms-[50px] flex flex-col gap-3 justify-center items-center">
                <button className="bg-[rgba(30,30,30,0.69)] hover:bg-[rgb(70,61,90)] rounded-[38px] w-[148px] h-[57px] text-white text-[22px] text-center">Habits</button>
                <button className="bg-[rgba(30,30,30,0.69)] hover:bg-[rgb(70,61,90)] rounded-[38px] w-[148px] h-[57px] text-white text-[22px] text-center">Statistics</button>
            </div>
        </div>
    );
};

export default Sidebar;