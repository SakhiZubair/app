//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
 function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  } 
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
     document.body.style.backgroundColor='#042743';
     showAlert('Dark mode has been enabled',"success");
     document.title ='TextUtils-Dark moode ';
     setInterval(()=>{
             document.title='TextUtils is Amazing Mode';
               }, 2000 );
    setInterval(()=>{
              document.title='Install TextUtils Now';
              }, 1500 );
    
              }
    else{
      // setmode='dark';// wrong way because this is state and state not change by assigning
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('Light mode has been enabled',"success");
      document.title ='TextUtils-Light mode ';
    }
  }
   return (
     <>
      <Router> 
<Navbar title="TextUtils" about="About " mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
 <div className="container my-3">
 {/* <TextForm showAlert={showAlert} heading="Enter The Text To Analyze below" mode={mode}/> */}
 <h1>Github</h1>
 <Routes>
  <Route path='/' element={ <TextForm showAlert={showAlert} heading="Enter The Text To Analyze below" mode={mode}/>
}/>
<Route path='/about' element={<About/>}/>
 </Routes>
 
 </div>
 </Router>  
       </>
  );
 }
 export default App;
 
