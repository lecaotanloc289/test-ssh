import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
<<<<<<< HEAD
import Footer from './components/footer/footer'
import Home from './components/home/Home'

=======
import Footer from './components/footer/footer' // Đảm bảo đúng đường dẫn
import SignIn from './components/signin/SignIn'
import Register from './components/register/Register'
import Categories from './components/categories/Categories'
import Home from './components/home/Home'
>>>>>>> 1cce60db2e3282b6e99f202f15bba6b29610cda0

function App() {
    return (
        <Router>
            <Header />
<<<<<<< HEAD
            <Home/>
=======
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/register" element={<Register />} />
            </Routes>
>>>>>>> 1cce60db2e3282b6e99f202f15bba6b29610cda0
            <Footer />
        </Router>
    )
}   

export default App
