import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import ProfileContainer from './components/profile/ProfileContainer';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import  UsersContainer  from './components/users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content_wrapper'>
        <Routes>
        <Route path='/profile/:userId?' element = {<ProfileContainer/>}/>
        <Route path='/dialogs/*' element = { <DialogsContainer/>}/>
        <Route path='/users' element = { <UsersContainer/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
