import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import Button from '@material-ui/core/Button'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import SaveIcon from '@material-ui/icons/Save'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Typography, Link } from '@material-ui/core'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        console.log(this);
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))
        
        this.setState({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })
    }
    render() {
        const paperStyle={padding :20, height:'70vh', width:320, margin:"20px auto"}
        const avatarStyle={backgroundColor:'Green'}
        const buttonStyle = {margin: '8px 0'}
        return(
            <Grid align='center'>
                <Paper elevation={10} style = {paperStyle}>
                    <Avatar style ={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                    <TextField label ='Full Name' placeholder='Enter fullname' onChange={this.changeFullName} fullWidth required/>
                    <TextField label ='Username' placeholder='Enter username' onChange={this.changeUsername}fullWidth required/>
                    <TextField label ='E-mail' placeholder='Enter e-mail' onChange={this.changeEmail}fullWidth required/>
                    <TextField label ='Password' placeholder='Enter password' type='password' onChange={this.changePassword} fullWidth required/>
                    <FormControlLabel
                    control = {
                        <Checkbox
                        name="checkedB"
                        color="primary"/>
                    }
                    label = "Remember me" />
                    <Button startIcon={<SaveIcon/>} onClick={this.onSubmit.bind(this)} fullWidth variant = "contained" color = "secondary" style = {buttonStyle}>
                                Create Account
                    </Button>
                    <Typography>Already have an account? 
                        <Link href="login"> Sign in</Link>
                    </Typography>
                </Paper>
            </Grid>

        );
    }
}

export default SignUp