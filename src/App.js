import logo from './logo.svg';
import './App.css';
import Main from './components/Mail/Main';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import EmailList from './components/Mail/Inbox';
import Message from './components/Mail/Sent';
import Inbox from './components/Mail/Inbox';
import Sent from './components/Mail/Sent';
import InboxView from './components/Mail/InboxView';
import SentView from './components/Mail/SentView';
import AuthForm from './components/Mail/AuthForm';
import HomePage from './components/Homepage/HomePage';
import Home from './components/Homepage/Home';

import { useSelector } from 'react-redux';
function App() {
  const isAuth=useSelector(state=>state.auth.isAuthenticated)
  return (
    <>
    <HomePage/>
    <BrowserRouter>
       
            <Routes>
             
          <Route path="/home" element={<Home/>}/>
            <Route path="/auth" element={<AuthForm/>}/>
           <Route path="/main" element={<Main/>}>
                 <Route   path="inbox" element={<Inbox/>}>
                        <Route path="inboxview" element={<InboxView/>}/>
                 </Route>
                 <Route path="sent" element={<Sent/>}>
                        <Route path="sentview" element={<SentView/>}/>   
                  </Route>

            </Route>
                  
               
                  
                
            </Routes>
       
        </BrowserRouter>
   
   
    </>
  );
}

export default App;
