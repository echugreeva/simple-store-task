import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Products from './Products'
import ProductsHome from './ProductsHome'
import FormUpdate from './FormUpdate';
import Stats from './components/stats/Stats'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path='/' element={<ProductsHome/>}/>
        <Route path='/admin' element={<Products/>}/>
        <Route path='/stats' element={<Stats/>}/>
      </Routes>
      
    </Container>
  );
}

export default App;
