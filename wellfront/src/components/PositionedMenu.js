import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Route, Routes, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import SignUp from './pages/SignUp'

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
      <Button
        color= "secondary"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Explore
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link to='/about'>About Us</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/login'>Log In</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/signup'>Sign Up</Link></MenuItem>
      </Menu>
      </div>
  );
}


