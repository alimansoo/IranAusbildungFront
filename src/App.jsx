import React from 'react';
import Home from './pages/index';
// import About from './pages/job_search';
// import Ausbildung from './pages/ausbildung';
// import Comparison from './pages/comparison';
// import CoverLetter from './pages/cover_letter';
// import Blog from './pages/blog';
// import SingleBlog from './pages/single_blog';
import ContactUs from './pages/contact_us';
import AboutUs from './pages/about_us';
import FAQ from './pages/faq';
import Login from './pages/login';
// import RequrieAuth from './features/requireAuth';
// import Welcome from './features/Welcome';
// import Layout from './components/layout';
import {
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      {/* <Route path='/' element={<Layout />}></Route> */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="jobsearch" element={<About />} />
      <Route path="ausbildung" element={<Ausbildung />} />
      <Route path="comparison" element={<Comparison />} />
      <Route path="cover_letter" element={<CoverLetter />} />
      <Route path="blog" element={<Blog />} />
      <Route path="single_blog" element={<SingleBlog />} /> */}
      <Route path="contact_us" element={<ContactUs />} />
      <Route path="about_us" element={<AboutUs />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="login" element={<Login />} />
      {/* protected routes */}
      {/* <Route element={<RequrieAuth />}>
        <Route path='welcome' element={<Welcome/>} />
      </Route> */}
    </Routes>
  );
};

export default App;