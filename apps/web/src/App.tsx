import HomePage from "./pages/home"
import AccountsPage from "./pages/accounts"
import LoansPage from "./pages/loans"
import ContactPage from "./pages/contact"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="text-pretty 2xl:w-[80vw] 2xl:flex 2xl:flex-col 2xl:justify-self-center">
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
