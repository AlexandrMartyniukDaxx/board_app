import React from 'react';
import { Paper, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@material-ui/core';
import './loginForm.css';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { GoogleLogin } from 'react-google-login';

export default class LoginForm extends React.Component {
    state = {
        password: '',
        email: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    responseGoogle = (response) => {
        console.log(response);
    };

    render() {
        return (
            <div className="d-flex flex-row justify-content-center">
                <Paper className="p-3">
                    <Typography variant="display1">Login</Typography>
                    <form>
                        <FormControl className="d-block">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                className="w-100"
                                id="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange('email')} />
                        </FormControl>
                        <FormControl className="d-block">
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <Input
                                id="password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}>
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                } />
                        </FormControl>
                        <div className="mt-3">
                            <GoogleLogin
                                style={{}}
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                            />
                            <Button variant="raised" color="secondary" className="float-right" style={{ color: 'white' }}>Log In</Button>
                        </div>
                    </form>
                </Paper>
            </div >)
    }
}
