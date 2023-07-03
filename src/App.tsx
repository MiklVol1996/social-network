import './App.css';
import React from 'react';
import Nav from './components/navbar/Nav';
import ProfileContainer from './components/profile/ProfileContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/loginPage/LoginContainer';
import { connect } from 'react-redux';
import { getInitialized } from './redux/app.reducer';
import { useEffect } from 'react';
import { AppStateType } from './redux/store';

type Props = {
  isInitialized: boolean,
  getInitialized: () => void,
}

const App: React.FC<Props> = ({isInitialized, getInitialized}) => {

  useEffect(() => {
    getInitialized();
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
      <HeaderContainer />
      <Nav />
      <div className='content_wrapper'>
        <Routes>
          <Route path='/social-network-js' element={<Navigate to='/profile' />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
  return {
    isInitialized: state.app.isInitialized,
  }
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, { getInitialized })(App);

type MapStateType = {
  isInitialized: boolean,
}

type MapDispatchType = {
  getInitialized: () => void,
}













