import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './Components/Books';
import Header from './Components/Header';
import Categories from './Components/Categories';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
