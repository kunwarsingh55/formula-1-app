import './App.css';
import GpInfoCard from './Components/GpInfoCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './Components/f1_logo.svg';
import CurrentResults from './Components/CurrentResults'


function App() {
  const [events, setevents] = useState([]);

  const [gpSelected, setgp] = useState('british');
  const [results, setresults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/allGp')
      .then(response => {
        //console.log(response.data.json);
        setevents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/getResults')
      .then(response => {
        //console.log(response.data);
        setresults(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  let ind = 0


  return (
    <div className="App">
      <div className="bg-container">
      <div className="navbar-container">
      <nav class="navbar bg-body-tertiary" style={{ "background-color": "red" }}>
          <div class="container-fluid d-flex justify-content-center">
            <a class="navbar-brand">
              <img src={logo} alt="Bootstrap" height="32" />
            </a>
          </div>
        </nav>
      </div>
        
        <div className="content-container">
          <GpInfoCard />
          <CurrentResults results={results} />
        </div>
      </div>



    </div>
  );
}

export default App;
