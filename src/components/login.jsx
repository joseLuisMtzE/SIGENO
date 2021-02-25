//import { Form, Input, Button, Card } from 'antd';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../assets/img/SIGENO.png';
//import { makeRequest } from '../shared/ApiWrapper';
//import { useHistory } from 'react-router-dom';

// const LSKEY = 'users';

const Login = () => {

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{ backgroundColor: '#292929', width: '40vw', height: '100%', position: 'absolute' }}>
                    <div style={{ padding: "25px", margin: '0 auto', marginTop: '13vw', width: '30vw' }}>
                        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}> Inicio de Sesión</h1>
                        <div style={{ margin: '0 auto' }}>

                            <Form.Group style={{ textAlign: 'center' }} controlId="formBasicPassword">
                                <h3 style={{ color: 'white' }}>RFC:</h3>
                                <Form.Control size="text" type="text" placeholder="RFC" style={{ textTransform: 'uppercase' }} />
                                <br />
                                <h3 style={{ color: 'white' }}>Contraseña:</h3>
                                <Form.Control type="password" placeholder="Password" />
                                <br />
                                <Button variant="primary" type="submit" size='lg'>Ingresar</Button>
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <img src={logo} style={{ width: '35vw', marginLeft: '53vw', marginTop: '15vw', position: 'relative' }} />
            </div>
        </>
    );
};

export default Login;
