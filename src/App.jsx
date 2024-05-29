import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contador from "./componentes/Contador/Contador";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Layout from "./componentes/Layout/Layout";
import useContador from "./hooks/useContador";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import CartProvider from "./contexts/CartContext/CartProvider";
import CarritoContainer from "./componentes/CarritoContainer/CarritoContainer";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:nombreCategoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CarritoContainer />} />
            <Route path="/*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
