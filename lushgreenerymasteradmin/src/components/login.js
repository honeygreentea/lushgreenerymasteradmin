import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';
import {
    Form,
    Button,
    Grid
} from 'semantic-ui-react'
function Login() {
    return (
        <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
                <h1>Lush Greenery Insurance</h1>
                <Form.Input
                    fluid icon="user" iconPosition="left" placeholder="Username" className="username" />
                <Form.Input
                    fluid icon="lock" iconPosition="left" placeholder="Password" type="password" className="password" />

                <Link to="/dashboard">
                    <Button color="teal" >
                        Login
                    </Button>
                </Link>

                <Link to="/register">
                    <Button color="normal" >
                        Not registered?
                    </Button>
                </Link>
            </Form>
            </Grid.Column>
            </Grid>
    );
}

export default Login;