import Card from "./Card"
import { FaChalkboardTeacher, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { dataLine, dataBar } from "../../assets/ChartData."
import {Line, Bar} from 'react-chartjs-2' 
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)


const DashboardUi = () => {
  return (
    <div className='grow p-8'>
        <h2 className='text-2xl mb-4'>Dashboard</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
            <Card icon={<FaShoppingCart />} title="Interns" value="23"/>
            <Card icon={<FaChalkboardTeacher />} title="Trainees" value="120"/>
            <Card icon={<FaUsers />} title="Users" value="30"/>
            
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Students Data</h3>
                <Line data={dataLine} />
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Intakes Data</h3>
                <Bar data={dataBar} />
            </div>
        </div>
    </div>
  )
}

export default DashboardUi