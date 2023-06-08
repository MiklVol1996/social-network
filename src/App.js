import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profile/Pfofile';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';

const App = ({store}) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content_wrapper'>
        <Routes>
        <Route path='/profile' element = {<Profile store={store}/>}/>
        <Route path='/dialogs/*' element = { <DialogsContainer store={store}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
