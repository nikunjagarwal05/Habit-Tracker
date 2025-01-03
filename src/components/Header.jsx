import React from 'react'

const Header = () => {
    return(
        <header>
            <div className='h-[92px] w-full bg-[#514178] flex justify-between ps-[700px] items-center'>
                <div className='h-[55px] w-[355px] bg-[rgba(161,158,158,0.28)]'></div>
                <div className='w-[180px] h-[55px] bg-transparent flex flex-row items-center mr-[50px] gap-[23px]'>
                    <div className='h-[51px] w-[100px] bg-[#D9D9D9] rounded-[26px] flex items-center'>
                        <div className='bg-[#514178] size-[40px] rounded-[30px] ms-[8px]'></div>
                    </div>
                    <div className='w-[51px] h-[51px] bg-[rgba(161,158,158,0.46)]'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;