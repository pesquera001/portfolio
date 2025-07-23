import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Theses from './pages/Theses';
import Editorial from './pages/Editorial';
import Article from './pages/Article';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/theses" element={<Theses />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
