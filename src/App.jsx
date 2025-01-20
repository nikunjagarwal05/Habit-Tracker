import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HabitCard from './components/HabitCard'
import ToDoCard from './components/TodoCard'
import ChallengesCard from './components/ChallengesCard'
import RewardCard from './components/RewardCard'
import StreakCard from './components/StreakCard'
import Footer from './components/Footer'

function App() {
  return (
    <body className='dark:bg-[#1C1C1C] h-full flex flex-col gap-[58px]'>
      <div>
        <Header />
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
      </div>

      <Footer />
    </body>
  )
}
export default App