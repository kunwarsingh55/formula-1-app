import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentResults from '../CurrentResults';
import './RaceResults.css';

import TrackDetailsCard from './TrackDetailsCard/TrackDetailsCard';

function RaceResults(props) {
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
        <>
            <div className="main">
                <div className="heading">
                    <h2>2023 RACE RESULTS</h2>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" style={{ 'margin-left': '2rem' }} href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Select Seacon
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">2023</a></li>
                            <li><a class="dropdown-item" href="#">2022</a></li>
                            <li><a class="dropdown-item" href="#">2021</a></li>
                        </ul>
                    </div>
                </div>

                <div className='divider' />

                <div className="result-area">
                    <div className='track-details'>
                        <TrackDetailsCard/>
                    </div>
                    <div className='result-table-area'>
                    <CurrentResults results={results} />
                    </div>
                </div>


            </div>
        </>
    )
}

export default RaceResults;