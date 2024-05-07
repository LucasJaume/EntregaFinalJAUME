import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contador from "./componentes/Contador/Contador";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Layout from "./componentes/Layout/Layout";
import useContador from "./hooks/useContador";
import MonoPatin from "./componentes/Router/MonoPatin";
import Skate from "./componentes/Router/Skate";
import Bicicleta from "./componentes/Router/Bicicleta";
import ItemDetailWithId from "./componentes/Router/ItemDetailWithId";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Bicicletas" element={<Bicicleta/>} />
          <Route path="/Skates" element={<Skate/>} />
          <Route path="/MonoPatines" element={<MonoPatin/>} />
          <Route path="/item/:id" element={<ItemDetailWithId/>} />
          <Route path="/*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
