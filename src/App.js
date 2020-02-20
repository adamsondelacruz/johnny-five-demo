import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';

import { ReactComponent as BulbOn} from './assets/bulb-on.svg';
import { ReactComponent as BulbOff} from './assets/bulb-off.svg';


const App = () => {
  const url = 'http://localhost:8000'
  const [active, setActive] = useState(false);  
  const setDevice = () => {
    const path = active? 'off': 'on';
    setActive(!active);    
    axios.get(`${url}/${path}`)
    .then( (response) => {
      console.log('RESPO', response);         
    });
    
  }
  const Toggle = () => {
    
    return (
      <Button toggle active={active} onClick={ ()=> { setDevice()}} >
          {active? 'Turn OFF': 'Turn ON'}
      </Button>
    )  
  }

  return (
    <div className="App">
      <header className="App-header">
        {active ? <BulbOn />: <BulbOff />}                
        <Toggle/>
      </header>
      
    </div>
  );
}

export default App;
