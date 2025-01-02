// PublicPage.js
import { Link } from 'react-router-dom';

function PublicPage() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our App</h1>
      <p>This is a public page accessible to all users.</p>
      <Link to="/protected" style={styles.link}>
        Visit Protected Page
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

export default PublicPage;


