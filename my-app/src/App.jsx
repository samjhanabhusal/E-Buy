import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

const App = () => {
  return (
  <Router>
    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>  
      <Route path = "/products">
       <ProductList/>
      </Route>
      <Route path = "/cart">
        <Cart />
      </Route>
      
      <Route path = "/login">
        <Login/>
      </Route>
      <Route path = "/register">
        <Register/>
      </Route>
    </Switch>
  </Router>
  );
};

export default App;