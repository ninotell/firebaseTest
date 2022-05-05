import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';

import { Button } from 'react-bootstrap';

function App() {
  const [user, setUser] = useState()
  
  return  <>{user ? <Home/> : <LogIn/>}</>
}

export default App;
