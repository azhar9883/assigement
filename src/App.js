import React from 'react';
// import {Route} from 'react-router-dom'
import Home from "./Component/Home";
import Profile from './Component/Profile';
import Gallery from './Component/Gallery';
import Post from './Component/Post';
import Todo from './Component/Todo';
import UserAzhar from './Component/UserAzhar';
import Discription from './Component/Discription';

import {

  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {


  return (
    <>
   
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/'element={<UserAzhar/>}/>
        {/* <Route path='/Profile' element={<Profile/>}></Route> */}
        <Route path='post' element={<Post/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='todo'element={<Todo/>}/>
        <Route path="/UserAzhar"><UserAzhar /></Route>
        <Route path="/Profile/:name" element={<Profile />} />
        {/* <Route path='/discription/:name' element={<Discription />} /> */}



      </Routes>
      {/* <Home /> */}
      {/* <UserAzhar /> */}
    </>
  )
}

export default App