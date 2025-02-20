import React from "react";
import '../fonts.css';
import { Link } from "react-router-dom";

const Journal = () => {
    return(
        <div className="bg-[#1c1c1c]"  style={{fontFamily: 'chill'}}>
            
            <nav className="text-[#D9D9D9] ml-5 gap-28 flex justify-start items-center h-full">
                <div className="text-[#D9D9D9] ml-5 gap-28 flex justify-start items-center h-full w-full">
                    <p className="text-4xl ">Kaizen.<strong className="bg-[linear-gradient(90deg,#ff5f6d_0%,#ffc371_50%,#ffde59_100%)] bg-clip-text text-transparent">Journal</strong></p>
                    <div className="h-16 flex justify-center items-center rounded-full w-[60%] mt-6 bg-[rgba(217,217,217,0.19)]">
                        <ul className='text-2xl font-bold flex justify-center items-center gap-10'>
                            <li className="hover:text-white"><Link>Stats</Link></li>
                            <li className="hover:text-white"><Link to={"/Kaizen"}>Main</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </nav>

            <section className="h-screen flex justify-center items-center w-full gap-20">
                <div className="h-[70vh] w-[45vw] rounded-3xl gap-5 flex justify-center items-center flex-col">
                    <div className="h-[25vh] w-[45vw] rounded-3xl text-center bg-[rgba(95,255,191,0.09)]">
                        <p className="bg-[linear-gradient(90deg,#ff5f6d_0%,#ffc371_50%,#ffde59_100%)] bg-clip-text text-transparent text-4xl border-r-4 whitespace-nowrap overflow-hidden border-white font-extrabold text-white text-center animate-typing-cursor">This is your everyday Journal.</p>
                    </div>

                    <div className="h-[45vh] w-[45vw] rounded-3xl text-center bg-[rgba(95,255,191,0.09)]">
                    </div>
                </div>

                <div className="h-[70vh] w-[45vw] rounded-3xl bg-[rgba(197,158,158,0.09)]">

                </div>
            </section>

            <section className="h-[100vh] w-full bg-white">

            </section>
        </div>
    );
};
export default Journal;