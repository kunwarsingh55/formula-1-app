import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CurrentResults from './Components/CurrentResults'
import RaceResults from './Components/RaceResults/RaceResults';

import NavBar from './Components/NavBar/NavBar';



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
      <NavBar/>
      <div className='content-container'>
      <RaceResults/>

      </div>
      


    </div>
  );
}

export default App;
