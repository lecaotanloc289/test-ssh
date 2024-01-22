import React from 'react'
import './SignIn.scss'

import {
    Button,
    Card,
    CardActionArea,
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
            <Container className="signin-main flex-space-between" >
                <Card className='card radius-8' sx={{ minWidth: 540 }}>
                    <CardContent className='signin-items'>
                        <Stack spacing={5}>
                            <Stack spacing={25} direction={'row'}>
                                <h3 className="h3 medium">Sign in to Elma</h3>
                                <a href='' className="register-here h7 regular indigo">
                                    Register here &gt;
                                </a>
                            </Stack>
                            <Stack direction={'row'} spacing={3}>
                                <Button className='register-with-gg radius-8  '
                                    fullWidth
                                    variant="contained"
                                    startIcon={<Google className='gg-register' />}
                                >
                                    <p className='normal h7 regular'>Register with Google</p>
                                </Button>
                                <Button className='register-with-twitter radius-8' variant="contained">
                                    <img  src={logo.twitter} alt="" />
                                </Button>
                                <Button className='register-with-facebook radius-8' variant="contained">
                                    <img  src={logo.facebook} alt="" />
                                </Button>
                            </Stack>
                            <Divider />
                            <Stack spacing={2}>
                                <p className='h7 regular'>Username or Email</p>
                                <TextField  className='input'></TextField>
                                <tr className='flex-space-between'>
                                    <td><p className='h7 regular'>Password</p></td>
                                    <td>
                                    <a href='' className='link-nomal-cusor indigo'><p className='h7 regular'>Forgot password</p></a>

                                    </td>
                                </tr>
                                <TextField className='input ' type="password"></TextField>
                            </Stack>
                            <Button className='signin-button radius-8' fullWidth variant="contained">
                                <p className='normal h7 regular'>Sign In</p>
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
                <CardActionArea  className='slide-signin' sx={{ minWidth: 350 }}>
                    
                </CardActionArea>
            </Container>
        </div>
    )
}
