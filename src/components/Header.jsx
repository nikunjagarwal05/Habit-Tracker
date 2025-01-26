import React, { useState } from 'react'

const Header = ({toggleDarkMode, darkMode}) => {
    return(
        <header>
            <div className='h-24 w-full shadow-lg bg-[#514178] dark:bg-[#000000] flex justify-between ps-[800px] items-center'>
                <p className='text-2xl text-center pt-3 text-black dark:hover:text-[#b9b8b8] hover:text-[#1d1b1b] dark:text-white'>Kaisen</p>
                <div className='w-52 h-14 bg-transparent flex flex-row items-center gap-10'>
                    <button className='w-14 h-14 text-xs bg-[#D9D9D9] hover:bg-[rgba(161,158,158,0.46)] dark:bg-[#4C3737] dark:hover:bg-[#2c2020] rounded-full text-black dark:text-white' onClick={toggleDarkMode}>{darkMode ? 'LHT':'DRK'}</button>
                    <div className='w-14 h-14 bg-[rgba(161,158,158,0.46)] hover:bg-[rgba(161,158,158,0.64)] rounded-full'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;