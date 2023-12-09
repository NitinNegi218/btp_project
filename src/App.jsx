import Navbar from "./Navbar"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { React } from "react"
import "./App.css"
import Home from "./Home"
function App() {
  return(
    <BrowserRouter>
    <div style={{width: "100vw",
                height: "100vh",
                backgroundColor: 
                "#eeeeee"}}
            >
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App
