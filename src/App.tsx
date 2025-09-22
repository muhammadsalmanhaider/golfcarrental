import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import CategoryPage from './pages/CategoryPage';
import BrandPage from './pages/BrandPage';
import AllBrandsPage from './pages/AllBrandsPage';
import SubCategoryPage from './pages/SubCategoryPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import DepositWaiverPage from './pages/DepositWaiverPage';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/category/:category/:range" element={<SubCategoryPage />} />
          <Route path="/brand/:brand" element={<BrandPage />} />
          <Route path="/brands" element={<AllBrandsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/deposit-waiver" element={<DepositWaiverPage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;