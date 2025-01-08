import React from 'react'

const Header = () => {
    return(
        <header>
            <div className='h-[92px] w-full bg-[#514178] flex justify-between ps-[700px] items-center'>
                <div className='h-[55px] w-[355px] bg-[rgba(161,158,158,0.28)]'></div>
                <div className='w-[180px] h-[55px] bg-transparent flex flex-row items-center mr-[50px] gap-[23px]'>
                
                    <label class="h-[51px] w-[90px] bg-[#D9D9D9] rounded-[26px] flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="relative h-[51px] w-[100px] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[5.5px] after:start-[5px] after:bg-[#514178] after:rounded-full after:size-[40px] after:transition-all flex justify-center items-center gap-[17px] z-0">
                            <i class="fa-regular fa-sun text-[22px] z-10"></i>
                            <i class="fa-regular fa-moon text-[22px] ms-[5px] z-10"></i>
                        </div>
                    </label>
                    
                    <div className='w-[51px] h-[51px] bg-[rgba(161,158,158,0.46)] rounded-[26px]'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;