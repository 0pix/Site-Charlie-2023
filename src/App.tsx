import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/layouts/Header";
import Login from "./pages/login/Login";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header name={"coucou"}/>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route  path="/register" element={<Register />} />
        <Route  path="/reset" element={<Reset />} />
        <Route  path="/dashboard" element={<Dashboard />} />
          {/*<Route index element={<Home />} />*/}
          {/*<Route path="about" element={<About />} />*/}
          {/*<Route path="dashboard" element={<Dashboard />} />*/}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/*<Route path="*" element={<NoMatch />} />*/}
      </Routes>
    </div>
  )
}

export default App
