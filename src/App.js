import { useState, useEffect } from "react";
// COMPONENTS
import Footer from "./components/main/Footer";
import UpArrow from "./components/main/UpArrow";
import HashLoader from "react-spinners/HashLoader"; //loader effect
// ROUTING
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import Courses from "./pages/Courses";
import EventList from "./pages/EventList";
import Event from "./pages/Event";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import AboutUs from "./pages/AboutUs";
import BlogList from "./pages/BlogList";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import CookieNotification from "./components/main/CookieNotification";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';
import ComingSoon from "./components/main/ComingSoon";
AOS.init();

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <>
      {loading ? (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-premiumColor/80">

          <HashLoader
            color="#fff"
            loading
            size={145}
            speedMultiplier={1.2}
          />
        </div>
      ) : (
        <Router>

          <Navbar />

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path='/instructors' element={<Instructors />} />
            <Route path='/eventslist' element={<EventList />} />
            <Route path='/event' element={<Event />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/bloglist" element={<BlogList />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>

          <UpArrow />
          <Footer />
          <CookieNotification />

        </Router>)}
    </>
  );
}

export default App;
