// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React,{useState} from 'react'


function App() {
  const[red,setRed]=useState('light')
  const [mode, setMode] = useState('light') //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null) 

const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
     setAlert(null)
    },3000)
}

const toggleRed=()=>{
   if(red==="danger"){
    setRed("light")
   }
   else{
    setRed("danger")
   }


}

 const toggleMode=()=>{
   if(mode==='light'){

     setMode('dark')
     document.body.style.backgroundColor="#042743"
     showAlert("Dark mode has been enabled",'success')
     document.title="Text Utils- Dark mode"
   }
   else{
    setMode('light')
    document.body.style.backgroundColor="white"
    showAlert("Light mode has been enabled",'success')
    document.title="Text Utils- light mode"
   }
  }
  return(
    <>
{/* <Router>

</Router> */}
{/* <Navbar title="Textutils2" aboutText="About textUtils"/> */}
<Router>
<Navbar title='textUtils' red={red} mode={mode} toggleMode={toggleMode} toggleRed={toggleRed}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
            <Route exact path="/about" element={<About />} >
             
            </Route>

            <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>}>
            </Route>

          </Routes>
</div>
          
          </Router>
  </>

  ) 

}
  


export default App;
