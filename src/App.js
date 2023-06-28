import './App.css';
import React from 'react';
import Nav from './components/navbar/Nav';
import ProfileContainer from './components/profile/ProfileContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/loginPage/Login';
import { connect } from 'react-redux';
import { getInitialized } from './redux/app.reducer.ts';

class App extends React.Component {

  componentDidMount() {
    this.props.getInitialized();
  }

  render() {

    if (!this.props.isInitialized) {
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
            <Route path='/' element={<Navigate to='/profile' />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { getInitialized })(App);













