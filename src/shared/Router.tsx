import Home from "@/Home"
import Login from "@/pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
