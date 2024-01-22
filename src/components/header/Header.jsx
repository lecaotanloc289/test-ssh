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
    Link,
    Stack,
    TextField,
} from '@mui/material'
import icons from '../../assets/icons'
import { BadgeOutlined, Search } from '@mui/icons-material'
import CircleIcon from '../items/CircleIcon'
import Elma from '../items/Elma'
import Navbar from './navbar'

export default function Header() {
    const badge_style = {
        fontSize: '20px',
    }
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
                        <Button className="search-button " variant="contained">
                            <img src={icons.Search} alt="" />
                        </Button>
                    </Stack>

                    <Stack spacing={1.5} direction={'row'}>
                        <Link href=''>
                            <div className="cart-icon">
                                <Badge
                                    className="red"
                                    badgeContent={4}
                                    color="error"
                                    style={badge_style}
                                >
                                    <img src={icons.Cart} alt="" />
                                </Badge>
                            </div>
                        </Link>
                        <CircleIcon link={icons.Love} children={undefined} />
                        <CircleIcon link={icons.User} children={undefined} />

                        <Stack spacing={1}>
                            <p className="h7 medium dark-lighter">Join Elma</p>
                            <p className="account h7 medium black">
                                My Account
                                <img src={icons.Chevron_down} alt="" />
                            </p>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}
