import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';

import firebaseApp from './credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp)


function App() {
  const [user, setUser] = useState()

  onAuthStateChanged(auth, (firebaseUser) => {
   if (firebaseUser) {
    setUser(firebaseUser)
   } else {
    setUser(null)
   }
    
  })
  
  return  <>{user ? <Home/> : <LogIn/>}</>
}

export default App;
