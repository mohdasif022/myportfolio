'use client';

import { useState } from "react";

export default function AdminView(){

    const [activeTab, setActiveTab] = useState('home'); 
    const menuItem = [
        {
            name: 'home',
            label:'Home',
            Component: 'AdminHomeView'
        },
        {
            name: 'about',
            label:'About',
            Component: 'AdminAboutView'

        },
        {
            name: 'education',
            label:'Education',
            Component: 'AdminEducationView'
        },
        {
            name: 'project',
            label:'Project',
            Component: 'AdminProjectView'
        },
        {
            name: 'contact',
            label:'Contact',
            Component: 'AdminContactView'
        },
    ]

    return <div className="border-b border-gray-200">
        <nav className=" flex justify-center space-x-6 " role="tablist">
            {
                menuItem.map((item, index) => {
                    return <button key={item.name} type="button" className="mt-2 pt-4 font-bold text-xl text-balck"
                    onClick={() => {
                        setActiveTab(item.name)
                    }}
                    >
                        {item.label}
                    </button>
                })
            }
                
        </nav>
        <div className="mt-10 p-10">
            {
                menuItem.map(item => item.name === activeTab && item.Component)
            }
        </div>

    </div>
}
