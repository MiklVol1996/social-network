import './App.css';
import React from 'react';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profile/Pfofile';
import { Routes, Route } from 'react-router-dom';

const App = ({state, dispatch}) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content_wrapper'>
        <Routes>
        <Route path='/profile' element = {<Profile state={state.profilePage} 
        dispatch={dispatch}/>}/>
        <Route path='/dialogs/*' element = { <Dialogs state={state.dialogsPage}
        dispatch={dispatch}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
