import Home from "@/Home"
import Login from "@/pages/Login"
import Categories from "@/pages/Categories"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PresentProvider from "@/context/PresentThemeProvider"
import PresentThemeProvider from "@/context/PresentThemeProvider"

const Router = () => {
  return (
    <BrowserRouter>
    <PresentThemeProvider>
      <PresentProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Categories />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </PresentProvider>
      </PresentThemeProvider>
    </BrowserRouter>
  )
}

export default Router
