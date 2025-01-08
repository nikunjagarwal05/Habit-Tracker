import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HabitCard from './components/HabitCard'
import ToDoCard from './components/TodoCard'
import ChallengesCard from './components/ChallengesCard'
import RewardCard from './components/RewardCard'
import StreakCard from './components/StreakCard'


function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='flex h-[474px] gap-[82px] w-full flex-row'>
        <HabitCard />
        <ToDoCard />
        <ChallengesCard />

        <div className='flex flex-col gap-[40px]'>
          <RewardCard />
          <StreakCard/>
        </div>

      </div>
    </>
  )
}

export default App