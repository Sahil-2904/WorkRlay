import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './routes/Home.tsx';
import Login from './routes/Login.tsx';
import SignIn from './routes/Signup.tsx';
import Jobs from './routes/Jobs.tsx';
import Empdash from './routes/Empdash.tsx';
import Cprofile from './routes/Cprofile.tsx';
import Postjob from './routes/Postjob.tsx';
import Managejobs from './routes/Managejobs.tsx';
import Echange from './routes/Echange.tsx';
import Candash from './routes/Candash.tsx';
import Canprofile from './routes/Canprofile.tsx';
import Cchange from './routes/Cchange.tsx';
import Cjobs from './routes/Cjobs.tsx';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/emp/dashboard" element={<Empdash />} />
        <Route path="/emp/company" element={<Cprofile />} />
        <Route path="/emp/post" element={<Postjob />} />
        <Route path="/emp/jobs" element={<Managejobs />} />
        <Route path="/emp/applicants" element={<Managejobs />} />
        <Route path="/emp/message" element={<Managejobs />} />
        <Route path="/emp/changepass" element={<Echange />} />
        <Route path='/can/dashboard' element={<Candash />} />
        <Route path='/can/profile' element={<Canprofile />} />
        <Route path='/can/jobs' element={<Cjobs />} />
        <Route path='/can/changepass' element={<Cchange />} />
      </Routes>
  )
}

export default App
