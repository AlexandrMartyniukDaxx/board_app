import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import './loginPage.css';
import LoginForm from './../login-form/login-form';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="h-100 flex">
                <AppBar position="static" className="p-1">
                    <Toolbar className="Toolbar">
                        <Typography variant="title" color="inherit" className="flex-grow-1">
                            Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <div className="bg-container flex flex-column justify-center">
                    <LoginForm></LoginForm>
                </div>
            </div>
        );
    }
}
