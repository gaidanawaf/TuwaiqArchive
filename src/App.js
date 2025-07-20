import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TuwaiqArchive from './components/TuwaiqArchive';
import Footer from './components/Footer';
import SubmitForm from './components/SubmitForm';
import UplaodForm from './components/UploadForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TuwaiqArchive />} />
        <Route path="/submit" element={<SubmitForm />} />
        <Route path="/Test" element={<UplaodForm />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

