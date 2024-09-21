import './App.scss';
import {Outlet} from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
      <div className="App">
          <Header />
          <main>
              <Outlet/>
          </main>
      </div>
  );
}

export default App;
