import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomepageBS from './Components/Homepage_BS/HomepageBS';
import HomepageAS from './Components/Homepage_AS/HomepageAS';
import Login from './Components/Login/Login';
import Signin from './Components/Signin/Signin';


function App() {
  return ( 
    <Routes>
      <Route path="/" element={<HomepageBS />} />
      <Route path="/home" element={<HomepageAS />} />
      <Route path='/login' element={< Login/>}/>
      <Route path='/sign' element={<Signin/>}/>
    </Routes>
  );
}

export default App;