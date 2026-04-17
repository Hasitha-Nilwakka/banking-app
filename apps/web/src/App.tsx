import HomePage from "./pages/home"
import AccountsPage from "./pages/accounts"
import LoansPage from "./pages/loans"
import ContactPage from "./pages/contact"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="text-pretty flex flex-col 2xl:max-w-[60%] 2xl:mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/accounts" element={<AccountsPage />}/>
        <Route path="/loans" element={<LoansPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
