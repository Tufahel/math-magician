// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
