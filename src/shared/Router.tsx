import Home from "@/Home"
import Login from "@/pages/Login"
import Categories from "@/pages/Categories"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PresentProvider from "@/context/PresentProvider"

const Router = () => {
  return (
    <BrowserRouter>
      <PresentProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Categories />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </PresentProvider>
    </BrowserRouter>
  )
}

export default Router
