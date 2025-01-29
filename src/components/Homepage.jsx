import React from "react";
import '../fonts.css';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div style={{fontFamily: 'crux'}}>
        {/* Navbar */}
        <nav className="flex justify-between items-center p-5 bg-white shadow-md dark:bg-gray-800">
            <span className="text-5xl font-bold text-gray-800 dark:text-white">Kaizen</span>
            <ul className="flex space-x-6 text-lg font-medium">
                <li><Link to={"/kaizen"} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-2xl">Home</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-2xl">Learn </a> </li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-2xl">About Us</a></li>
            </ul>
            <button className="bg-[#574964] hover:bg-[#35293f] text-white px-5 py-2 rounded-lg shadow-md transition duration-300 font-bold text-3xl">Sign Up</button>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 gap-[20px]">
            <div className="flex flex-col justify-center items-center px-6">
                <h1 className="text-7xl font-bold text-gray-800 dark:text-white mb-4">This is Kaizen.</h1>
                <p className="text-3xl text-gray-600 dark:text-gray-300 text-center max-w-3xl">
                    Turn your productive goals into an adventure. Kaisen makes building
                    habits and achieving tasks fun and rewarding.</p>
                <button className="mt-8 bg-[#574964] hover:bg-[#35293f] text-white px-6 py-3 rounded-lg text-2xl font-medium shadow-md transition duration-300">Join Kaisen Today</button>
            </div>
            {/* <div className="relative h-[700px] w-[700px]">
                <img className="bg-cover absolute h-[500px] w-[95%] top-0 left-0" src={darkImage} alt="dark-mode" />
                <img className="bg-cover absolute h-[500px] w-full top-[100px] left-[100px]" src={lightImage} alt="light-mode" />
            </div> */}
        </section>

        {/* Habit Functionality Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6"> Build Habits, Break Limits</h2>
                <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Create and track habits that matter to you. Stay consistent and see
                    your productivity soar.</p>
            </div>
        </section>

        {/* To-Do Functionality Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6"> Stay Organized Like a Pro </h2>
                <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Effortlessly manage tasks, prioritize what matters, and experience
                    the joy of completing your goals.</p>
            </div>
        </section>

        {/* Challenges Functionality Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6"> Take on Challenges, Win Big</h2>
                <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Add excitement to your journey by taking on challenges. Compete with
                    friends and earn rewards.</p>
            </div>
        </section>

        {/* Rewards and Streak Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Consistency Pays Off</h2>
                <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Earn streaks and rewards for staying consistent. Get motivated and
                    aim higher with each milestone.</p>
            </div>
        </section>

        {/* Exp, Gems, Level, and Health Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">Gamify Your Productivity</h2>
                <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Earn experience points, collect gems, and level up while tracking
                    your health. Make productivity fun and engaging. </p>
            </div>
        </section>

        {/* About Us Section */}
        <footer className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">The Vision Behind Kaisen</h2>
                <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Built by passionate creators, Kaisen is designed to make
                    productivity fun and rewarding for everyone. </p>
            </div>
        </footer>
    </div>
  );
};

export default Homepage;