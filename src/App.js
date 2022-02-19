import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Status from "./pages/Status"
import Edit from "./pages/Edit"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Status" element={<Status />}></Route>
        <Route path="Edit" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
