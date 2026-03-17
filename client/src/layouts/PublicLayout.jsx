import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import {Outlet} from 'react-router-dom'

export default function PublicLayout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}