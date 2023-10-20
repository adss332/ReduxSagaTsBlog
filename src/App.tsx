import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TestPage from './components/pages/TestPage';
import PostsPage from './components/pages/posts/PostsPage';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={ <TestPage/> }/>
        <Route path="/" element={ <PostsPage/> }/>
      </Routes>
    </Router>
  );
};

export default App;
