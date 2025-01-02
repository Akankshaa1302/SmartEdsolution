// ProtectedPage.js
import { UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function ProtectedPage() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Protected Page</h1>
        <UserButton />
      </div>
      <p>Welcome to the protected area! Only authenticated users can see this.</p>
      <Link to="/" style={styles.link}>
        Back to Public Page
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
  },
  link: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '20px'
  }
};

export default ProtectedPage;
