import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Clubs from "./pages/Clubs";
import Profile from "./pages/Profile";
import AllResources from "./pages/resources/AllResources";

import Marketplace from "./pages/marketplace/Marketplace";
import Admin from "./components/Admin";
import Contests from "./components/Contests";
import Sections from "./components/Sections";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Admin /> */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/marketplace">
          <Marketplace />
        </Route>
        <Route path="/allresources">
          <AllResources />
        </Route>
        <Route path="/discussions">
          <div>Coming Soon....</div>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/contests">
          <Contests />
        </Route>
        <Route path="/clubs">
          <Clubs />
        </Route>
        <Route
          path="/placements"
          component={() => {
            window.open("https://rvce.edu.in/placement-statistics");
          }}
        />
      </Switch>

      {/* <Sections /> put in home */}
    </div>
  );
}

export default App;
