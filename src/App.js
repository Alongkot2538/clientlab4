import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Compo from './Compo.js';
import Compo2 from './Compo2.js';
import Compo3 from './Compo3.js';
import CompoFoot from './CompoFoot';
import axios from 'axios';

const App = () => {
  let url = 'https://api.github.com/users/Alongkot2538'
const [git ,  setgit ] = useState('')
useEffect(()=>{
  getUser()
})
const getUser = async ()=>{
  const res = await axios.get(url)
  setgit(res.data)
  // console.log(res.data)
}

  return (
  <div>

    <h1>{git.login}</h1>


    <div >
  <div className="row">
    <div class="col-sm-2 " >
    <Compo2 />
      
    </div>
    <div class="col-sm-8" >
    <Compo />
    </div>
    <div class="col-sm-2" >
    <Compo3 />
    </div>
  </div>
</div>

<CompoFoot />





  </div>
  );
}
export default App;