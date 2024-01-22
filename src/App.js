import logo from './logo.svg';
import './App.css';
import Main from './components/Mail/Main';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import EmailList from './components/Mail/EmailList';
import Message from './components/Mail/Message';
function App() {
  return (
    <>

   <Main/>
    <BrowserRouter>
         <Router>
            <Routes>
             
             
                <Route path='main' element={<Main />}>
                    <Route path='emaillist' element={<EmailList />} /> {/*A nested route!*/}
                    <Route path=':message' element={<Message />} /> {/*A nested route!*/}
                </Route>
            </Routes>
        </Router>
        </BrowserRouter>
   
   
    </>
  );
}

export default App;
