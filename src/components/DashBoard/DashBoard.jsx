import DashboardUi from "./DashboardUi"
import Sidebar from "./Sidebar"
import TopDashboard from "./TopDashboard"


const DashBoard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white'>
        <TopDashboard />
        <div>
          <DashboardUi />
        </div>
      </div>
    </div>
  )
}

export default DashBoard