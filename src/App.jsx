import "./App.css";
import Contador from "./componentes/Contador/Contador";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Layout from "./componentes/Layout/Layout";
import useContador from "./hooks/useContador";

function App() {
  return (
    <Layout>
      <ItemListContainer greeting={"Buenos Dias!"}/>
    </Layout>
  );
}

export default App;
