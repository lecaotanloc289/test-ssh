import React from 'react'
import './SignIn.scss'

import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    IconButton,
    Link,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { Fullscreen, Google } from '@mui/icons-material'
import logo from '../../assets/logo'
export default function SignIn() {
    return (
        <div className="signin">
            <div className="signin-1"></div>
            <div className="signin-2"></div>
            <Container className="signin-main" maxWidth="md">
                <Card sx={{ minWidth: 540 }}>
                    <CardContent>
                        <Stack spacing={3}>
                            <Stack spacing={20} direction={'row'}>
                                <h3 className="h3 medium">Sign in to Elma</h3>
                                <a className="register-here">
                                    Register here &gt;
                                </a>
                            </Stack>
                            <Stack direction={'row'} spacing={3}>
                                <Button className='register-with-gg'
                                    fullWidth
                                    variant="contained"
                                    startIcon={<Google />}
                                >
                                    Register with Google
                                </Button>
                                <Button className='register-with-twitter' variant="contained">
                                    <img  src={logo.twitter} alt="" />
                                </Button>
                                <Button className='register-with-facebook' variant="contained">
                                    <img  src={logo.facebook} alt="" />
                                </Button>
                            </Stack>
                            <Divider />
                            <Stack spacing={2}>
                                <p>Username or email</p>
                                <TextField></TextField>
                                <tr>
                                    <td>Password</td>
                                    <td>Forgot password</td>
                                </tr>
                                <TextField type="password"></TextField>
                            </Stack>
                            <Button className='signin-button' fullWidth variant="contained">
                                Sign In
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
                <Card className='slide-signin' sx={{ minWidth: 350 }}>
                    
                </Card>
            </Container>
        </div>
    )
}
