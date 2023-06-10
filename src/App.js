import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profile/Pfofile';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import  UsersContainer  from './components/users/UsersContainer';
import Preloader from './components/preloader/Preloader';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content_wrapper'>
        <Routes>
        <Route path='/profile/*' element = {<Profile/>}/>
        <Route path='/dialogs/*' element = { <DialogsContainer/>}/>
        <Route path='/users' element = { <UsersContainer/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
