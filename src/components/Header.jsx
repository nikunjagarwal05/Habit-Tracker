import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../fonts.css";

const Header = ({toggleDarkMode, darkMode}) => {
    return(
        <header>
            <div className='h-20 w-full shadow-lg bg-[#514178] dark:bg-[#000000] flex justify-between ps-10 items-center'>
                <div className='flex gap-20 justify-center items-center'>
                    <p className='text-2xl pt-3 dark:hover:text-[#b9b8b8] hover:text-[#1d1b1b] dark:text-white'><Link to={"/"}>Kaizen</Link></p>
                    
                    <div className='mt-[57px]'>
                        <div className={`h-20 rounded-t-2xl w-[400px] bg-[#726592] dark:bg-[#121212] flex justify-center items-center`}>
                            <ul className='flex text-4xl gap-8 font-bold'  style={{fontFamily: 'crux'}}>
                                <li className='hover:underline underline-offset-8 z-0 text-[#d1d0d0]'><Link>Home</Link></li>
                                <li className='hover:underline underline-offset-8 z-0 text-[#d1d0d0]'><Link>Stats</Link></li>
                                <li className='hover:underline underline-offset-8 z-0 text-[#d1d0d0]'><Link to={"/journal"}>Journal</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-52 h-14 flex items-center gap-10'>
                    <button className='text-4xl mb-2' onClick={toggleDarkMode}>{darkMode ? '☀️':'🌒'}</button>
                    <div className='w-14 h-14 bg-[rgba(161,158,158,0.46)] hover:bg-[rgba(161,158,158,0.64)] rounded-full'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;