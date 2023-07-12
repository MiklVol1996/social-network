import './App.css';
import React, { Suspense, useRef, RefObject, useEffect } from 'react';
import Nav from './components/navbar/Nav';
import ProfileContainer from './components/profile/ProfileContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dialogs from './components/dialogsList/DialogsList';
import UsersContainer from './components/users/UsersContainer';
import Header from './components/header/Header';
import Login from './components/loginPage/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialized } from './redux/app.reducer';
import Preloader from './components/common/preloader/Preloader';
import PrivateChat from './components/privateChat/PrivateChat';
import { giveIsInitialized } from './redux/selectors';
import { Action } from 'redux';


const Chat = React.lazy(() => import('./components/chat/Chat'))
const News = React.lazy(() => import('./components/news/News'))

const App: React.FC = () => {

  const ref = useRef() as RefObject<HTMLDivElement>;
  const isInitialized = useSelector(giveIsInitialized); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialized() as unknown as Action);
  }, [])

  if (!isInitialized) {
    return (
      <div className='logWrap'>
        <Login />
      </div>
    )
  }

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content_wrapper'>
        <Routes>
          <Route path='/social-network-js' element={<Navigate to='/profile' />} />
          <Route path='/login' element={<Navigate to='/profile' />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/private/:id' element={<PrivateChat />} />
          <Route path='/news' element={<Suspense fallback={<Preloader/>}><News /></Suspense>} />
          <Route path='/chat' element={<Suspense fallback={<Preloader/>}><Chat /></Suspense>} />        
        </Routes>
        <div ref={ref}></div>
      </div>
    </div>
  )
}

export default App;















