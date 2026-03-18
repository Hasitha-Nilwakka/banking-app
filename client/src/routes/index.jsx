import {Routes, Route} from 'react-router-dom'
import PublicLayout from '@/layouts/PublicLayout'
import HomePage from '@/pages/public/HomePage'
import AccountsPage from '@/pages/public/AccountsPage'
import LoansPage from '@/pages/public/LoansPage'
import ContactPage from '@/pages/public/ContactPage'

function PublicRoutes() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/accounts' element={<AccountsPage />} />
            <Route path='/loans' element={<LoansPage />} />
            <Route path='/contact' element={<ContactPage />} />
            </Route>
        </Routes>
    )
}

export {PublicRoutes}