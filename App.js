import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import Home from './Home';
import React, { useState } from 'react';
import Alert from './components/Alert'



function App() {
  const [mode, setMode]= useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null);
    },3000)
  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enable", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
    showAlert("light mode has been enable", "success")
    }
  }

  return (
  <>

        <Navbar title='text Formation' mode={mode} toggleMode={toggleMode}/>
     {/* <About/> */}
     <Alert alert={alert}/>
     <div className='container my-3'>
     <Home/>
     </div>

        </>
  );
}

export default App;
