import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './routes/Home.tsx';
import Login from './routes/Login.tsx';
import SignIn from './routes/Signup.tsx';
import Jobs from './routes/Jobs.tsx';
import Empdash from './routes/Empdash.tsx';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/emp/dashboard" element={<Empdash />} />
      </Routes>
  )
}

export default App
