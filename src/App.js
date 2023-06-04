import './App.css';
import Header from './components/header/Header';
import Nav from './components/navbar/Nav';
import Profile from './components/profile/Pfofile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  );
}

export default App;
