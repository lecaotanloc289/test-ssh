import {
    Button,
    Container,
    Divider,
    InputBase,
    MenuItem,
    Paper,
    Stack,
    TextField,
} from '@mui/material'
import './Register.scss'
import icons from '../../assets/icons'
import logo from '../../assets/logo'
import React from 'react'
const gender = [
    {
        value: 0,
        label: 'Female',
    },
    {
        value: 1,
        label: 'Male',
    },
    {
        value: 2,
        lable: 'Orther',
    },
]
const Register = () => {
    return (
        <Container className="register-main" maxWidth="lg">
            <Container className="register flex-space-between">
                <Infor />
                <RegisterForm />
                
            </Container>
            <LeadingBrand />
        </Container>
    )
}

export const Infor = () => {
    return (
        <Stack spacing={3} className="register-1" width={540} height={586}>
            <p className="h2 medium dark-title">
                Join with +2 Milion seller who offer best product from all
                across country
            </p>

            <p className="h8 regular dark-lighter5a">
                Sign up now and get all big benefit from Elma e-commerce:
            </p>
            <Stack direction={'row'} spacing={1.5}>
                <img width={34} height={34} src={icons.Shipping} alt="" />
                <Stack direction={'column'} spacing={1}>
                    <p className="h6 medium dark-title">Free Shipping</p>
                    <p className="h8 regular dark-lightest95">
                        You will get free shipping from all your transactions.
                    </p>
                    <p className="h8 regular dark-lightest95">
                        No terms, no transaction limit.
                    </p>
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={1.5}>
                <img width={34} height={34} src={icons.Money} alt="" />
                <Stack direction={'column'} spacing={1}>
                    <p className="h6 medium dark-title">Money Back Guarantee</p>
                    <p className="h8 regular dark-lightest95">
                        You will get free shipping from all your transactions.
                    </p>
                    <p className="h8 regular dark-lightest95">
                        No terms, no transaction limit.
                    </p>
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={1.5}>
                <img
                    width={34}
                    height={34}
                    src={icons.CustomerService}
                    alt=""
                />
                <Stack direction={'column'} spacing={1}>
                    <p className="h6 medium dark-title">
                        24/7 Customer support
                    </p>
                    <p className="h8 regular dark-lightest95">
                        You will get free shipping from all your transactions.
                    </p>
                    <p className="h8 regular dark-lightest95">
                        No terms, no transaction limit.
                    </p>
                </Stack>
            </Stack>
        </Stack>
    )
}

export const RegisterForm = () => {
    return (
        <Stack width={540} height={650} className="register-2" spacing={3}>
            <p className="h3 medium dark-title">New Member on here?</p>
            <p className="h8 regular dark-lighter5a">
                Register your account into us and you can start buy or sell your
                product in here. Follow all the steps to finish registration.
            </p>
            <Stack spacing={3} direction={'row'}>
                <div>
                    <p className="h8 regular dark-title">First name</p>
                    <TextField
                        className="input firstname"
                        variant="outlined"
                    ></TextField>
                </div>
                <div>
                    <p className="h8 regular dark-lighter5a">Last name</p>
                    <TextField
                        className="input firstname"
                        variant="outlined"
                    ></TextField>
                </div>
            </Stack>
            <Stack spacing={3} direction={'row'}>
                <div>
                    <p className="h8 regular dark-title">Email</p>
                    <TextField
                        type="email"
                        placeholder="example@gmail.com"
                        className="input email"
                        variant="outlined"
                    ></TextField>
                </div>
                <div>
                    <p className="h8 regular dark-lighter5a">Gender</p>
                    {/* <TextField
                        className=" gender"
                        id="outlined-select-gender"
                        select
                        defaultValue={''}
                    >
                        {gender.map((gen) => (
                            <MenuItem
                                className="h8 regular"
                                key={gen.value}
                                value={gen.value}
                            >
                                {gen.label}
                            </MenuItem>
                        ))}
                    </TextField> */}
                    <div className="">
                        <select
                            className="radius-4 input gender h8 regular"
                            name=""
                            id=""
                        >
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                            <option value="2">Orther</option>
                        </select>
                    </div>
                </div>
            </Stack>
            <Stack spacing={1} direction={'row'}>
                <div>
                    <p className="h8 regular dark-title">Phone number</p>
                    <Paper
                        className="phonenumber"
                        component={'form'}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <p className="h8 regular prefix-phone">+84</p>
                        <Divider
                            sx={{ height: 28, m: 0.5 }}
                            orientation="vertical"
                        />
                        <InputBase
                            placeholder="000 000 000"
                            className="input-phonenumber"
                        />
                    </Paper>
                    {/* 
                    <TextField className="input" variant="outlined"></TextField>
                    <TextField className="input" variant="outlined"></TextField> */}
                </div>
            </Stack>
            <Stack spacing={3} direction={'row'}>
                <div>
                    <p className="h8 regular dark-title">Password</p>
                    <TextField
                        type="password"
                        className="input firstname"
                        variant="outlined"
                    ></TextField>
                </div>
                <div>
                    <p className="h8 regular dark-lighter5a">
                        Confirm password
                    </p>
                    <TextField
                        type="password"
                        className="input firstname"
                        variant="outlined"
                    ></TextField>
                </div>
            </Stack>
            <Stack
                className="btn-group"
                width={485}
                spacing={4}
                direction={'row'}
            >
                <Button
                    variant="contained"
                    className="create-account normal height48 primary-background radius-8"
                >
                    <p className="h7 medium white">Create your account</p>
                </Button>
                <p className="or h8 regular dark-lightest95">or</p>
                <Button
                    variant="contained"
                    className="login normal height48 primary-background radius-8"
                >
                    <p className="h7 medium white">Login</p>
                </Button>
            </Stack>
        </Stack>
    )
}

export function LeadingBrand() {
    return (
        <Container className="leading-brand" maxWidth="lg">
            <p className="h3 medium dark-title">
                Trusted by leading brand in the world
            </p>
            <Stack className="brand-img-group" direction={'row'} spacing={6}>
                <img src={logo.Asus} alt="" />
                <img src={logo.Xiaomi} alt="" />
                <img src={logo.Samsung} alt="" />
                <img src={logo.Sony} alt="" />
                <img src={logo.Wacom} alt="" />
                <img src={logo.Apple} alt="" />
            </Stack>
        </Container>
    )
}
export default Register
