import React from 'react';
import Home from './pages/index';
import JobSearch from './pages/job_search';
import Ausbildung from './pages/ausbildung';
import ComparisonAusbildung from './pages/comparison';
import CoverLetter from './pages/cover_letter';
import Blog from './pages/blog';
import SingleBlog from './pages/single_blog';
import ContactUs from './pages/contact_us';
import AboutUs from './pages/about_us';
import FAQ from './pages/faq';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from '../src/pages/dashboard/home'
import SavedAusbildung from './pages/dashboard/saved_ausbildung';
import YourFeatures from './pages/dashboard/your_features';
import ListConsultations from './pages/dashboard/list_consultations';
import EditProfile from './pages/dashboard/edit_profile';
import SendCoverLetter from './pages/dashboard/cover_letter';
import NotFound from './pages/NotFound';
// import RequrieAuth from './features/requireAuth';
// import Welcome from './features/Welcome';
// import Layout from './components/layout';
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="jobsearch" element={<JobSearch />} />
      <Route path="ausbildung" element={<Ausbildung />} />
      <Route path="compar_ausbildung" element={<ComparisonAusbildung />} />
      <Route path="cover_letter" element={<CoverLetter />} /> 
      <Route path="blog" element={<Blog />} />
      <Route path="single_blog" element={<SingleBlog />} />
      <Route path="contact_us" element={<ContactUs />} />
      <Route path="about_us" element={<AboutUs />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* protected routes */}
      <Route path="/dashboard">
        <Route path="home" element={<Dashboard />} />
        <Route path="saved_ausbildung" element={<SavedAusbildung />} />
        <Route path="your_features" element={<YourFeatures />} />
        <Route path="list_consultations" element={<ListConsultations />} />
        <Route path="edit_profile" element={<EditProfile />} />
        <Route path="cover_letter" element={<SendCoverLetter />} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default App;