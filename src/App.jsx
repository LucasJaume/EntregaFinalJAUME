import "./App.css";
import Brand from "./componentes/Brand";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  return (
    <div>
      <div className="NavbarApp">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer greeting={"Buenos Dias!"} />
    </div>
  );
}

export default App;
