import React from 'react'
import useFetch from '../components/useFetch'
import TeacherList from '../components/List'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import { Download, ReceiptPoundSterlingIcon } from 'lucide-react'
import { Box,LayoutDashboard,LogOutIcon } from 'lucide-react'


export default function Student() {
  const {data, isPending, error} = useFetch('http://localhost:8000/teachers')

  return (

    <div className='flex'>
        <Sidebar name={'Ziva Sharma'} email={'zivasharma@gmail.com'}>
        <SidebarItem icon={<LayoutDashboard size={20}/>}  text="Dashboard" active/>
        
        <SidebarItem icon={<ReceiptPoundSterlingIcon size={20}/>}  text="Results" to='/student/results'/>
        <SidebarItem icon={<Box size={20}/>} text="TimeTable" to='/student/dayclasses'/>
        <SidebarItem icon={<Download size={20}/>} text = "Updates" to='/student/updates'/>
        
        <hr className="my-3"/>
        <SidebarItem icon={<LogOutIcon size={20} />} text="Logout"   />
      </Sidebar>

      


      {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {data && <TeacherList teacher={data} />}
        
        
    </div>
  )
}
