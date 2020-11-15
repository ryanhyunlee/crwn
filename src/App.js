import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Route } from "react-router-dom";

const App = () => {
  const HatsPage = () => {
    return (
      <div>
        <h1>HATS PAGE</h1>
      </div>
    );
  };

  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={HatsPage} />
    </div>
  );
};

export default App;
