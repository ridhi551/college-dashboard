import React from 'react'
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import logo from "../assets/g_logo.jpg"
import profile from "../assets/profile.png"
import { createContext, useContext, useState } from "react"
import { Link } from 'react-router-dom';


const SidebarContext = createContext();

export default function Sidebar({children,name,email}) {
    const [expanded, setExpanded] = useState(true)
  return (
    <>
    
    <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
                        
                    </div>

                    
                    <ul className="flex-1 px-3">{children}</ul>

                    <div className="border-t flex p-3">
                        <img src={profile} className="w-10 h-10 rounded-md" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all w-52 ml-3 `}>
                            <div className="leading-4">
                                <h4 className="font-semibold">{name}</h4>
                                <span className="text-xs text-gray-600">{email}</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                        </div>
                    </nav>
            </aside></>
  )
}

export function SidebarItem({ icon, text, active,to }) {

    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
          <Link to={to} className="flex items-center w-full">
            {icon}
            <span className="ml-3 bg indigo-200">{text}</span>
          </Link>
        </li>
      );
}





