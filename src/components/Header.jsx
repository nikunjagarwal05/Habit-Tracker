import React, { useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return(
        <header className={`${darkMode && "dark"}`}>
            <div className='h-[92px] w-full bg-[#514178] dark:bg-[#000000] flex justify-between ps-[700px] items-center'>
                <div className='h-[55px] w-[355px] bg-[rgba(161,158,158,0.28)] hover:bg-[rgba(161,158,158,0.50)]'></div>
                <div className='w-[200px] h-[55px] bg-transparent flex flex-row items-center gap-10'>
                    <button className='w-[55px] h-[55px] bg-[#D9D9D9] hover:bg-[rgba(161,158,158,0.46)] dark:bg-[#4C3737] rounded-full text-black dark:text-white font-semibold' onClick={toggleDarkMode}>{darkMode ? "LHT":"DRK"}</button>
                    <div className='w-[51px] h-[51px] bg-[rgba(161,158,158,0.46)] hover:bg-[rgba(161,158,158,0.64)] rounded-full'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;