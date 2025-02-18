import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvieder } from './components/context/FeedbackContext';

const style = {
  color: '#ff6a95',
  backgroundColor: 'rgba(0,0,0,0.4)',
};

function App() {
  return (
    <FeedbackProvieder>
      <Router>
        <Header title="Feedback UI" style={style} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvieder>
  );
}

export default App;
