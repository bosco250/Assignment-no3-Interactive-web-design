import React, { useState, useEffect, memo } from 'react';

const Header = memo(() => {
  console.log('Rendering Header');
  return (
    <header style={styles.header}>
      <p>Current Time (updated every second)</p>
    </header>
  );
});

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // console.log('Rendering LiveClock');

  return (
    <div style={styles.clockContainer}>
      <h2 style={styles.time}>{currentTime}</h2>
    </div>
  );
};

const Footer = memo(() => {
  console.log('Rendering Footer');
  return (
    <footer style={styles.footer}>
      <p>This won't re-render when time updates.</p>
    </footer>
  );
});

const AppClock = () => {
  return (
    <div style={styles.appContainer}>
      <Header />
      <LiveClock />
      <Footer />
    </div>
  );
};

// Inline styles for components
const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
  },
  clockContainer: {
    marginTop: '20px',
  },
  time: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '10px 0',
    marginTop: '40px',
  },
};

export default AppClock;
