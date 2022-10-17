
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<ProductList />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/AddProduct" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
