import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profile/Pfofile';
import { Routes, Route } from 'react-router-dom';


const App = ({state}) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content_wrapper'>
        <Routes>
        <Route path='/profile' element = {<Profile state={state.profilePage}/>}/>
        <Route path='/dialogs/*' element = { <Dialogs state={state.dialogsPage}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
