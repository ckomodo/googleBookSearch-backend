import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Searched from "./pages/searched";
import Navbar from "./components/Navbar"
// import Background from "./components/Background";

function App() {
  return (
    <div>
      
      <Router>
        <Navbar />
        <Switch>
          {/* <Background> */}
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route exact path="/searched">
              <Searched />
            </Route>
            <Route exact path="/">
              <Saved />
            </Route>
          {/* </Background> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
