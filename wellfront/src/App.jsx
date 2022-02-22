import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Main from './pages/Main'


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
        </Routes>
      </Router>
    </div>
  );
}