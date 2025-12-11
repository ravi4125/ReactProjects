import "./App.css";
import Card from "./Component/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import StateManagement from "./Component/StateManagement";
import UseEffect from "./Component/UseEffect";
import UseRef from "./Component/UseRef";
import ControlledComponents from "./Component/ControlledComponents";
import FormExample from "./Component/FormExample";
import UseReducer from "./Component/UseReducer";
import UseMemo from "./Component/UseMemo";
import GGP from "./Component/UseContext/GGP";
import GP from "./Component/UseContext/GP";
import UserContext from "./Component/UseContext/UserContext";
import Providers from "./Component/UseContext/Providers";
import Child from "./Component/UseContext/Child";
import Create from "./CRUD/Create";
import Listing from "./CRUD/Listing";
import Color from "./Colorchange/Color";

function App() {
  return (
    <>
      {/* <div className="App">
        <Card
          img={
            "https://cdn.pixabay.com/photo/2025/10/07/21/24/tree-9879873_1280.jpg"
          }
          title={"pink leaves"}
          sale={"Click me"}
        />
        <Card
          img={
            "https://media.istockphoto.com/id/668288668/photo/green-leaves-background.jpg?s=2048x2048&w=is&k=20&c=Cfu7O5A3pmf20OnM7ewpTTtW4EqD1VNF27n6jyUlZcc="
          }
          title={"green leaves"}
        />
      </div> */}

      {/* <StateManagement /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}

      {/* Controlled Components */}

      {/* <ControlledComponents /> */}
      {/* <FormExample /> */}
      {/* <UseReducer /> */}
      {/* <UseMemo /> */}

      {/* <Providers>
        <Child />
      </Providers> */}

      {/* Crud OP */}

      <Color />

      {/* <Create />
      <Listing /> */}
    </>
  );
}

export default App;
