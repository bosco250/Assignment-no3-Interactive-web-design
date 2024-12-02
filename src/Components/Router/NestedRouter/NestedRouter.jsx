import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

// Main Blog Page - Shows a list of blog posts
const BlogMain = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li>
        <Link to="/blog/1">Post One</Link>
      </li>
      <li>
        <Link to="/blog/2">Post Two</Link>
      </li>
      <li>
        <Link to="/blog/3">Post Three</Link>
      </li>
    </ul>
    <Outlet /> {/* Nested route content will render here */}
  </div>
);

const BlogPost = () => {
  const { postId } = useParams(); // Extract postId from the URL
  return (
    <div>
      <h2>Post {postId}</h2>
      <p>This is the content for post {postId}.</p>
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
};

const AppNested = () => (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/blog" element={<BlogMain />}>
        {/* Nested route for individual posts */}
        <Route path=":postId" element={<BlogPost />} />
      </Route>
    </Routes>
);

export default AppNested;
