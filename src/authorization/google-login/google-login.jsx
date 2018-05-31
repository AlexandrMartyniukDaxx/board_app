import React from 'react';
import { Button } from '@material-ui/core';

export default class GoogleAuthBtn extends React.Component {

    componentDidMount() {
        window.gapi.signin2.render('g-signin2', {
            // 'scope': 'https://www.googleapis.com/auth/plus.login',
            // 'longtitle': true,
            'theme': 'light',
            'onsuccess': this.onSignIn
        });
    }

    onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }

    render() {
        return (<div id="g-signin2" className="d-inline-block">Hello</div>)
    }
}