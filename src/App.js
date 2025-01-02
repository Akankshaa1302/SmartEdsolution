// App.js
import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import PublicPage from './components/PublicPage';
import ProtectedPage from './components/ProtectedPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route
        path="/protected"
        element={
          <>
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
}

export default App;



