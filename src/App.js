import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Status from "./pages/Status"
import Edit from "./pages/Edit"
import Choose from "./pages/Choose"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route path="Status" element={<Status />}></Route>
        <Route path="Edit" element={<Edit />}></Route>
        <Route path="Choose" element={<Choose />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
