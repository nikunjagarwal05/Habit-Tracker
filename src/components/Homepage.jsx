import React from "react";

const Homepage = () => {
    return(
        <div>
            <nav className="h-[70px] w-full text-black flex p-[50px] justify-center gap-[11rem] items-center">
                <span className="h-[60px] w-[90px] text-black font-bold tracking-[0.2em] ml-[90px] text-[25px] flex justify-center items-center">Kaisen</span>
                <div className="h-[60px] w-[1000px] text-black font-semibold">
                    <ul className="flex text-[20px] pt-[17px] gap-10 list-none items-center">
                        <li><a href="http://localhost:5173/Kaisen" className="hover:underline hover:underline-offset-[1rem] hover:text-[#808080] ">Home</a></li>
                        <li><a href="" className="hover:underline hover:underline-offset-[1rem] hover:text-[#808080] ">Learn</a></li>
                        <li><a href="" className="hover:underline hover:underline-offset-[1rem] hover:text-[#808080] ">About Us</a></li>
                    </ul>
                </div>
                <button className="h-[50px] w-[90px] text-white rounded-full font-semibold bg-[#574964] hover:bg-[#3c2b4c]">Sign Up</button>
            </nav>

            {/* Hero section */}
            <section className="h-[100vh] w-full">
                <div>
                    <p></p>
                </div>
            </section>
            {/* Learn: 1: Habits */}
            <section className="h-[100vh] w-full"></section>
            {/* Learn: 2: To-Do */}
            <section className="h-[100vh] w-full"></section>
            {/* Learn: 3: Challenges */}
            <section className="h-[100vh] w-full"></section>
            {/* Learn: 4: Streak and Reward */}
            <section className="h-[100vh] w-full"></section>
            {/* Learn: 5: Exp, health, gems and Levels */}
            <section className="h-[100vh] w-full"></section>
            {/* About us: the app */}
            <section className="h-[100vh] w-full"></section>
        </div>
    );
};

export default Homepage;