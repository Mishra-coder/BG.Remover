import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in/*" element={
            <div className="auth-page">
              <SignIn routing="path" path="/sign-in" />
            </div>
          } />
          <Route path="/sign-up/*" element={
            <div className="auth-page">
              <SignUp routing="path" path="/sign-up" />
            </div>
          } />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
