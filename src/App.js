import "./App.css";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import React,{useState} from "react";
import Alert from './component/Alert'
import About from "./component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [mode , setMode] = useState('light')
  const [alert , setAlert] = useState(null)
  const [color , setColor] = useState('white')

  const showAlert = (msg,alt) => {
    setAlert({
      msg:msg,
      alt:alt
  })
  setTimeout(() => {
    setAlert(null)
    }, 2000)
  }

  
  const switchDark = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0f0936'
      showAlert('The mode is switched to dark','success')
      setColor('black')
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('The mode is switched to light','success')
      setColor('white')
    }
  }
  const redDark = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#4f0303'
      showAlert('The mode is switched to dark','success')
      setColor('red')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('The mode is switched to light','success')
      setColor('darkRed')
    }
  }
  const greenDark = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1e4a01'
      showAlert('The mode is switched to dark','success')
      setColor('green')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('The mode is switched to light','success')
      setColor('darkGreen')
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils"mode={mode} toggleDark={switchDark} redDark={redDark} greenDark={greenDark}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<Form heading="Enter a text here" mode={mode} showAlert={showAlert} color={color} />}/>
        <Route exact path="/about" element={<About mode={mode} showAlert={showAlert}/>} />
      </Routes>
    </Router>
  );
}

export default App;
