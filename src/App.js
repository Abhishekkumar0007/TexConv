//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#051d48';
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Texconv" mode={mode} toggleMode={toggleMode} itm1="Home" itm2="Items" itm3="About" />
        <Alert myalert="This ia an alert - your system will be destroyed in 5sec " />

        <div className="container my-4">

          <Switch>
            <Route exact path="/About">
              <About />
            </Route>

            <Route exact path="/">
              <Textform heading="OUR SERVICE" mode={mode} />

            </Route>
          </Switch>




          {/* <About/> */}


        </div>

      </Router>

    </>

  );
}

export default App;
