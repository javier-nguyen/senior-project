import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import LogIn from './pages/LogIn';
import Core from './pages/Core';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
   
    <div className={classes.root}>
      <CssBaseline />
      <Router>   
        <Routes>
          <Route path ="/" element ={<Main/>}></Route>
          <Route path ="/signup" element ={<SignUp/>}></Route>
          <Route path = "/login" element ={<LogIn/>}></Route>
          <Route path = "/core" element={<Core/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}