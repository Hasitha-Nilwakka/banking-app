import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import {Outlet} from 'react-router-dom'

export default function PortalLayout() {
    return (
        <div>
            <Sidebar />
            <Header />
            <Outlet />
        </div>
    )
}