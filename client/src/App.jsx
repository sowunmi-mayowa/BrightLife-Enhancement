import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Errorpage } from "./pages/Errorpage";
import "./index.css"
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<Errorpage />} element={ <Root /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact-us" element={ <Contact /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/admin/login" element={ <Login /> } />
        <Route path="/admin/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

const Root = () => {
  return <div className="bg-lightGreen">
    <Navbar />
    <Outlet />
  </div>
}

export default App
