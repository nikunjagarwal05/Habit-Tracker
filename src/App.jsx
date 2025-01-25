import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HabitCard from './components/HabitCard'
import ToDoCard from './components/TodoCard'
import ChallengesCard from './components/ChallengesCard'
import RewardCard from './components/RewardCard'
import StreakCard from './components/StreakCard'
import Footer from './components/Footer'

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode',darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);


  return (
    <div className={`h-[100vh] dark:bg-[#1C1C1C] flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Sidebar />
      
      <div className='flex h-[500px] gap-[100px] justify-center w-full flex-row'>
        <HabitCard />
        <ToDoCard />
        <ChallengesCard />
        <div className='flex flex-col mt-10 gap-2 h-[544px] w-[320px]'>
          <StreakCard/>
          <RewardCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default App