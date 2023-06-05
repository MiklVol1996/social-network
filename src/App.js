import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profile/Pfofile';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content_wrapper'>
        <Routes>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/dialogs/*' element = { <Dialogs />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
