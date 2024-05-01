import React from 'react'

import Sidebar, { SidebarItem } from "../components/Sidebar"
import { Box, Home, LayoutDashboard, LogOut, LogOutIcon, Upload } from 'lucide-react'



export default function Admin() {
  return (
    <div class="flex">
      <Sidebar name={'Dr. Simmi Dutta'} email={'simmidutta@gmail.com'}> 
        <SidebarItem icon={<LayoutDashboard size={20}/>}  text="Dashboard" active/>
        <SidebarItem icon={<Box size={20}/>} text="TimeTable" to="/timetable"/>
        <SidebarItem icon={<Upload  size={20}/>} text = "Updates" to='/admin/push_updates'/>

        <hr className="my-3"/>
        <SidebarItem icon={<LogOutIcon size={20} />} text="Logout"   />
      </Sidebar>
    </div>
  )
}