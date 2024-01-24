import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Link to={'/signin'}>Sign in</Link>
            <Link to={'/register'}>Register</Link>
        </>
    )
}

export default Home
