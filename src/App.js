// COMPONENTS
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import UpArrow from "./components/main/UpArrow";

// ROUTING
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMatch } from 'react-router-dom';

//PAGES
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import Courses from "./pages/Courses";
import EventList from "./pages/EventList";
import Event from "./pages/Event";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import LoginRegister from "./pages/LoginRegister";
import AboutUs from "./pages/AboutUs";
import BlogList from "./pages/BlogList";


function App() {

  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path='/instructors' element={<Instructors />} />
          <Route path='/eventslist' element={<EventList />} />
          <Route path='/event' element={<Event />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/bloglist" element={<BlogList />} />
        </Routes>

        <UpArrow />
        <Footer />

      </Router>
    </>
  );
}

export default App;
