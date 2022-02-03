import "./App.css";
import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Textform from "./Components/Textform"
import Alert from "./Components/Alert";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

const App = () => {
  const  [mode, setMode] = useState('light');
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled !!","Success")
    }
    else{
      setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("light mode has been Enabled !!","Success")
    }
  }

 const  [alert, setAlert] = useState(null)
 const showAlert=(message,type)=>{
   setAlert({
     msg:message,
     type:type

   })
   setTimeout(() => {
     setAlert(null)
   }, 2000);
 }
  return (
    <>
    <Router>
     <Navbar  about="About" mode={mode} toggleMode={toggleMode}/>
     <div className="container my-1"><Alert alert={alert}/></div>
     <div className="container">
     <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="TextUtils -Text Analyzer And Converter" mode={mode}/>
          </Route>
        </Switch>
       
     </div>
     </Router>
    </>
  );
};

export default App;
