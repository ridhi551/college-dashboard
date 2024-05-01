import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import { Download } from 'lucide-react'
import { Box,LayoutDashboard,LogOutIcon } from 'lucide-react'
import useFetch from '../components/useFetch'
import TeacherList from '../components/List'
import PList from '../components/teacher/PList'


export default function Teacher() {
  const {data, isPending, error} = useFetch('http://localhost:7000/subjects')

  return (
    <>
    
      <div className='flex'>
        <Sidebar name={'Dr. Jyoti Mahajan'} email={'jmahajan1972@gmail.com'}>
        <SidebarItem icon={<LayoutDashboard size={20}/>}  text="Dashboard" active/>
        
        <SidebarItem icon={<Box size={20}/>} text="TimeTable" alert/>
        <SidebarItem icon={<Download size={20}/>} text = "Updates"/>
        
        <hr className="my-3"/>
        <SidebarItem icon={<LogOutIcon size={20} />} text="Logout"   />
        </Sidebar>
        </div>

        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {data && <PList subject={data} />}
      
        </>
  )
}
