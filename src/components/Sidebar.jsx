import React, { useState, useEffect } from "react";
import morningImage from "../assets/Morning.jpg";
import afternoonImage from "../assets/Afternoon.jpg";
import eveningImage from "../assets/Evening.jpg";
import nightImage from "../assets/Night.jpg";

import '../fonts.css'

const Sidebar = () => {
    
    const [level, setLevel] = useState(1);
    const [experience, setExperience] = useState(0);
    const [maxExp, setMaxExp] = useState(100);
    const [health, setHealth] = useState(10);
    const [gold, setGold] = useState(0);
    const [greeting, setGreeting] = useState("Good Morning");
    const [maxHealth, setMaxHealth] = useState(10);
    const [currentDate, setCurrentDate] = useState("");
    const dailyHealthRefill = 5;
    const healthLossPerUnfinishedTask = 1;
    const extraHealthOnLevelUp = 1;
    const goldRewardForNextLevelUp = 1;

    const getBackgroundImage = () => {
        switch(greeting) {
            case "Morning":
                return morningImage;
            case "Afternoon":
                return afternoonImage;
            case "Evening":
                return eveningImage;
            case "Night":
                return nightImage;
            default:
                return morningImage;
        }
    };

    const formatDate = () => {
        const options = { day: "2-digit", month: "short", year: "numeric" };
        const today = new Date();
        return today.toLocaleDateString("en-US", options);
    };

    const handleCompletion = (pointsEarned, goldEarned) => {
        setExperience((prevExp) => {
            const newExperience = prevExp + pointsEarned;
            if (newExperience >= maxExp) {
                levelUp(newExperience - maxExp);
                return 0;
            }
            return newExperience;
        });
        setGold((prevGold) => prevGold + goldEarned);
    };

    const handleUnfinishedTasks = (unfinishedCount) => {
        setHealth((prevHealth) => {
            const newHealth = prevHealth - unfinishedCount * healthLossPerUnfinishedTask;
            if (newHealth <= 0) {
                penalizePlayer();
                return 0;
            }
            return newHealth;
        });
    };


    const penalizePlayer = () => {
        setLevel((prevLevel) => Math.max(1, prevLevel - 1));
        setHealth(Math.ceil(maxHealth / 2));
        setGold((prevGold) => Math.max(1, prevGold - 1));
    };

    
    const levelUp = (carryOverExperience) => {
        setLevel((prevLevel) => prevLevel + 1);
        setExperience(carryOverExperience);
        setMaxExp((prevMaxExp) => prevMaxExp + 50);
        setGold((prevGold) => prevGold + goldRewardForNextLevelUp);
        setMaxHealth((prevMaxHealth) => prevMaxHealth + extraHealthOnLevelUp);
        setHealth((prevHealth) => prevHealth + extraHealthOnLevelUp);
    };

    useEffect(() => {
        const updateGreeting = () => {
            const currentHour = new Date().getHours();

            if(currentHour >= 5 && currentHour < 12) {
                setGreeting("Morning");
            } else if(currentHour >= 12 && currentHour < 17){
                setGreeting("Afternoon");
            } else if(currentHour >= 17 && currentHour < 21){
                setGreeting("Evening");
            } else {
                setGreeting("Night");
            }
        };

        updateGreeting();
        const interval = setInterval(updateGreeting, 1000*60);
        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        setCurrentDate(formatDate());
    }, []);

    useEffect(() => {
        const refillHealth = () => {
            setHealth((prevHealth) => Math.min(maxHealth, prevHealth + dailyHealthRefill));
        };

        const now = new Date();
        const nextDay = new Date();
        nextDay.setDate(now.getDate() + 1);
        nextDay.setHours(0, 0, 0, 0);
        const timeUntilNextDay = nextDay - now;

        const timer = setTimeout(() => {
            refillHealth();
            setInterval(refillHealth, 24 * 60 * 60 * 1000);
        }, timeUntilNextDay);

        return () => clearTimeout(timer);
    }, [maxHealth]);

    return (
        <div>
            <div className="h-56 shadow-md bg-[#726592] dark:bg-[#121212] flex justify-center items-center gap-10">
                
                {/* Greeting Section */}
                <div className="h-40 w-72 bg-[#D9D9D9] dark:bg-[#3F3F3F] rounded-[17px] bg-cover" style={{backgroundImage: `url(${getBackgroundImage()})`,}}>
                    <p className="text-2xl text-white font-bold px-3 py-3">Good <br />{greeting},</p>
                    <p className="text-sm px-3 text-white">user</p>
                </div>

                <div className="flex flex-col text-white gap-2">
                    {/* Date Display */}
                    <div className="h-20 w-80 bg-[#675B83] hover:bg-[#5F4F84] dark:hover:bg-[rgba(161,158,158,0.50)] dark:bg-[#3F3F3F] rounded-2xl flex justify-center items-center">
                        <p className="text-sm">{currentDate}</p>
                    </div>
                    {/* Level Display */}
                    <div className="flex flex-row justify-between">
                        <div className="h-20 w-44 bg-[#675B83] hover:bg-[#5f4f84] dark:hover:bg-[rgba(161,158,158,0.50)] dark:bg-[#3F3F3F] flex justify-center items-center rounded-2xl">
                            <p className="text-sm">Level:{level}</p>
                        </div>
                        {/* Gems Display */}
                        <div className="h-20 w-32 bg-[#675B83] hover:bg-[#5f4f84] dark:hover:bg-[rgba(161,158,158,0.50)] dark:bg-[#3F3F3F] flex justify-center items-center rounded-2xl">
                            <p className="text-sm flex justify-center items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-[30px]" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="#FFA623"></circle><path fill="#FFF" d="M6.3 17.7c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0" opacity=".5"></path><path fill="#FFF" d="M17.7 6.3c3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0" opacity=".25"></path><path fill="#BF7D1A" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" opacity=".5"></path><path fill="#BF7D1A" d="M13 9v2h-2V9H9v6h2v-2h2v2h2V9z" opacity=".75"></path></g></svg>
                                <span>{gold}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Progress Bars Section */}
                <div className="h-40 w-[570px] text-white bg-[#675B83] dark:hover:bg-[rgba(161,158,158,0.50)] hover:bg-[#5f4f84] dark:bg-[#3F3F3F] rounded-3xl gap-6 flex flex-col justify-center items-end pr-5">
                
                    {/* Health Bar */}
                    <div className="flex gap-3 mt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-7 mt-[-6px]" viewBox="0 0 24 24"> <g fill="none" fill-rule="evenodd"><path fill="#F74E52" d="M2 4.5L6.167 2 12 5.167 17.833 2 22 4.5V12l-4.167 5.833L12 22l-5.833-4.167L2 12z"></path> <path fill="#FF6165" d="M7.333 16.667L3.667 11.5V5.417l2.5-1.5L12 7.083l5.833-3.166 2.5 1.5V11.5l-3.666 5.167L12 19.917z"></path><path fill="#FFF" d="M12 14.083l4.667 2.584L12 19.917z" opacity=".5"></path><path fill="#B52428" d="M12 14.083l-4.667 2.584L12 19.917z" opacity=".35"></path><path fill="#FFF" d="M7.333 16.667L3.667 11.5 12 14.083z" opacity=".25"></path><path fill="#B52428" d="M16.667 16.667l3.666-5.167L12 14.083z" opacity=".5"></path><path fill="#B52428" d="M12 14.083l5.833-10.166 2.5 1.5V11.5z" opacity=".35"></path><path fill="#B52428" d="M12 14.083L6.167 3.917l-2.5 1.5V11.5z" opacity=".5"></path><path fill="#FFF" d="M12 14.083L6.167 3.917 12 7.083z" opacity=".5"></path><path fill="#FFF" d="M12 14.083l5.833-10.166L12 7.083z" opacity=".25"></path><path fill="#FFF" d="M9.167 14.833l-3-4.166V6.833h.083L12 9.917l5.75-3.084h.083v3.834l-3 4.166L12 16.917z" opacity=".5"></path></g></svg>
                        <div className="w-[421px]">
                            <div className="bg-[#271b3d] dark:bg-[#282828] h-5 rounded-full">
                                <div className="bg-[#f74e52] delay-50 transition-all h-5 rounded-full" style={{ width: `${(health / maxHealth) * 100}%` }}></div>
                            </div>
                        </div>
                        <span className="text-xs mt-1"><strong>{health}</strong>/{maxHealth}</span>
                    </div>

                    {/* Experience Bar */}
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-7 mt-[-6px]" viewBox="0 0 24 24"> <g fill="none" fill-rule="evenodd"> <path fill="#FFA623" d="M16 16l8-4-8-4-4-8-4 8-8 4 8 4 4 8z"></path> <path fill="#FFF" d="M4.5 12l5-2.5L12 12zM12 19.5l-2.5-5L12 12zM19.5 12l-5 2.5L12 12zM12 4.5l2.5 5L12 12z" opacity=".25"></path> <path fill="#BF7D1A" d="M19.5 12l-5-2.5L12 12z" opacity=".25"></path> <path fill="#BF7D1A" d="M12 19.5l2.5-5L12 12z" opacity=".5"></path> <path fill="#FFF" d="M4.5 12l5 2.5L12 12zM12 4.5l-2.5 5L12 12z" opacity=".5"></path> <path fill="#FFF" d="M10.8 13.2L8.5 12l2.3-1.2L12 8.5l1.2 2.3 2.3 1.2-2.3 1.2-1.2 2.3z" opacity=".5"></path> </g> </svg>
                        <div className="w-[421px]">
                            <div className="bg-[#271b3d] dark:bg-[#282828] h-5 rounded-full">
                                <div className="bg-[#ffbe5d] delay-50 ease-out transition-all h-5 rounded-full" style={{ width: `${(experience / maxExp) * 100}%` }}></div>
                            </div>
                        </div>
                        <span className="text-xs mt-1"><strong>{experience}</strong>/{maxExp}</span>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="w-40 h-40 bg-[#675B83] dark:hover:bg-[rgba(161,158,158,0.50)] dark:bg-[#3F3F3F] rounded-3xl flex flex-col gap-3 justify-center items-center">
                    <button className="bg-[rgba(30,30,30,0.69)] dark:bg-[#27252A] hover:bg-[rgb(70,61,90)] rounded-full w-36 h-14 text-white text-xs text-center"
                        onClick={() => handleCompletion(10, 0.5)}> Complete </button>

                    <button className="bg-[rgba(30,30,30,0.69)] dark:bg-[#27252A] hover:bg-[rgb(70,61,90)] rounded-full w-36 h-14 text-white text-xs text-center"
                        onClick={() => handleUnfinishedTasks(1)}> Unfinished </button>
                </div>
            </div>
            <div className="w-full bg-cover bg-center aspect-[900/300] absolute z-[-1] bg-[url('./assets/sidebar.svg')] dark:bg-[url('./assets/sidebar.svg')]"></div>
        </div>
    );
};

export default Sidebar;
