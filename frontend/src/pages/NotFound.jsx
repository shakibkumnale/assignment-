import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const NotFound = () => (
  <div className="not-found-container" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    color: '#333',
    textAlign: 'center',
  }}>
    <h1 style={{ fontSize: '6rem', margin: 0, color: '#e53e3e', fontWeight: 'bold' }}>404</h1>
    <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>Page Not Found</h2>
    <p style={{ marginBottom: '2rem', color: '#666' }}>The page you are looking for does not exist.</p>
    <Link to="/" style={{
      padding: '0.75rem 2rem',
      background: '#3182ce',
      color: '#fff',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
      transition: 'background 0.2s',
    }}
    onMouseOver={e => e.target.style.background = '#2563eb'}
    onMouseOut={e => e.target.style.background = '#3182ce'}
    >Go to Home</Link>
  </div>
);

export default NotFound;
