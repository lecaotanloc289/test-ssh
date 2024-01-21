import React from 'react'
import logo from '../../assets/logo'
import './header.scss'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import {
    Badge,
    Button,
    ButtonBase,
    Divider,
    Stack,
    TextField,
} from '@mui/material'
import icons from '../../assets/icons'
import { CardGiftcardOutlined, Search } from '@mui/icons-material'
import CircleIcon from '../items/CircleIcon'
import Elma from '../items/Elma'
import Navbar from './navbar'

export default function Header() {
    return (
        <div>
            <Container maxWidth="lg">
                <Navbar />
            </Container>

            <Divider />

            <Container className="header" maxWidth="lg">
                <Stack className="header-2" spacing={2} direction={'row'}>
                    <Elma />

                    <Stack className="searching" direction={'row'}>
                        <TextField className="search-field"></TextField>
                        <Button
                            size="small"
                            className="search-button"
                            variant="contained"
                        >
                            <Search fontSize="large" />
                        </Button>
                    </Stack>

                    <Stack spacing={2} direction={'row'}>
                        <CircleIcon link={icons.Cart}></CircleIcon>
                        <CircleIcon link={icons.Love} />
                        <CircleIcon link={icons.User} />

                        <Stack spacing={1}>
                            <p className="">Join Elma</p>
                            <span className="">
                                My Account{' '}
                                <img src={icons.Chevron_down} alt="" />
                            </span>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}
