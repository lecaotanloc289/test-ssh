import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

import Footer from "./components/footer/footer"; // Đảm bảo đúng đường dẫn
import SignIn from "./components/signin/SignIn";
import Register from "./components/register/Register";
import Categories from "./components/categories/Categories";
import Home from "./components/home/Home";
import Ordersuccessful from "./components/ordersuccessful/ordersuccessful";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Ordersuccessful />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
