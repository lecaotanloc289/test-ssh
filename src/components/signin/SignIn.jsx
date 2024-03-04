import React, { useEffect, useState } from "react";
import "./SignIn.scss";
import {
    Alert,
    AlertTitle,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Container,
    Divider,
    FormGroup,
    IconButton,
    Link,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Close, Google, Troubleshoot } from "@mui/icons-material";
import logo from "../../assets/logo";
import axios from "axios";
import { API_PUBLIC_URL } from "../../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { signInAndLoadUserData } from "../../redux/actions/signInAction";
import MainLayout from "../MainLayout";
import { useNavigate, useHref } from "react-router-dom";

var userId;
const loadUserData = async () => {
    try {
        const userResponse = await axios.get('http://localhost:2000/api/v1/users/' + userId)
    // Do something with user data
    console.log('User data:', userResponse.data);
    }    
     catch (error) {
      // Handle error
      console.error('Error fetching user data:', error);
    }
}
export default function SignIn() {
    const isAuthenticated= useSelector(state => state.auth.isAuthenticated);
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("");
    const [password_hash, setPassword] = useState("");
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [notify, setNotify] = useState("");
    const dispatch = useDispatch()
    
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    }
        
    if(isAuthenticated) {
        navigate("/")
    }
    
    const handleSignIn = async () => {
        if(email === '' && password_hash === '') {
            setNotify('Please enter your email and password!');
            setSignInSuccess(false);
            setOpenSnackBar(true);
            return;
        }
        if(email === null || email === '') {
            setNotify('Please enter your email');
            setSignInSuccess(false);
            setOpenSnackBar(true);
            return;
        }
        else if(password_hash === null || password_hash === '') {
            setNotify('Please enter your password');
            setSignInSuccess(false);
            setOpenSnackBar(true);
            return;
        }
        dispatch(
            signInAndLoadUserData({
                email: email,
                password_hash: password_hash,
            })
        );
    };

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    
    return (
        <MainLayout>
            
            {<Snackbar
                open={openSnackBar}
                autoHideDuration={5000}
                onClose={handleClose}
                message={notify}
                action={action}
            />
            }
            <div className="signin">
                <div className="signin-1"></div>
                <div className="signin-2"></div>
                <Container className="signin-main flex-space-between">
                    <Card className="card radius-8" sx={{ minWidth: 540 }}>
                        <CardContent className="signin-items">
                            <Stack spacing={5}>
                                <Stack spacing={25} direction={"row"}>
                                    <h3 className="h3 medium">
                                        Sign in to Elma
                                    </h3>
                                    <a
                                        href="/register"
                                        className="register-here h7 regular indigo"
                                    >
                                        Register here &gt;
                                    </a>
                                </Stack>
                                <Stack direction={"row"} spacing={3}>
                                    <Button
                                        className="register-with-gg radius-8  "
                                        fullWidth
                                        variant="contained"
                                        startIcon={
                                            <Google className="gg-register" />
                                        }
                                    >
                                        <p className="normal h7 regular">
                                            Register with Google
                                        </p>
                                    </Button>
                                    <Button
                                        className="register-with-twitter radius-8"
                                        variant="contained"
                                    >
                                        <img src={logo.twitter} alt="" />
                                    </Button>
                                    <Button
                                        className="register-with-facebook radius-8"
                                        variant="contained"
                                    >
                                        <img src={logo.facebook} alt="" />
                                    </Button>
                                </Stack>
                                <Divider />
                                <FormGroup>
                                    <Stack spacing={2}>
                                        <p className="h7 regular">Email</p>
                                        <TextField
                                            className="input"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            onChange={(e) => setEmail(e.target.value)
                                            }
                                            value={email}
                                        ></TextField>
                                        <tr className="flex-space-between">
                                            <td>
                                                <p
                                                    typeof="password"
                                                    className="h7 regular"
                                                >
                                                    Password
                                                </p>
                                            </td>
                                            <td>
                                                <a
                                                    href=""
                                                    className="link-nomal-cusor indigo"
                                                >
                                                    <p className="h7 regular">
                                                        Forgot password
                                                    </p>
                                                </a>
                                            </td>
                                        </tr>
                                        <TextField
                                            className="input "
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            onChange={(e) => setPassword(e.target.value)
                                            }

                                        ></TextField>
                                    </Stack>

                                    <Button
                                        onClick={handleSignIn}
                                        className="mg40 signin-button radius-8"
                                        fullWidth
                                        variant="contained"
                                    >
                                        <p className="normal h7 regular">
                                            Sign In
                                        </p>
                                    </Button>
                                </FormGroup>
                            </Stack>
                        </CardContent>
                    </Card>
                    <CardActionArea
                        className="slide-signin"
                        sx={{ minWidth: 350 }}
                    ></CardActionArea>
                </Container>
            </div>
        </MainLayout>
    );
}
