import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import './App.css';

function App() {
  return (
    <div className="bg-cyan-200 w-full h-full">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Index />} />
          <Route path="/games/new" element={<New />} />
          <Route path="/games/:id" element={<Show />} />
          <Route path="/games/:id/edit" element={<Edit />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
