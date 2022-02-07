import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import AuthProvider from "./components/Context/AuthProvider";
import BuyD from "./components/Dell/BuyD";
import Drone from "./components/Dell/Drone";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import Shipping from "./components/Shipping/Shipping";
import shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/orders" element={<OrderReview />}></Route>
            <Route
              path="/inventory"
              element={
                <PrivetRoute>
                  <Inventory />
                </PrivetRoute>
              }
            ></Route>
            <Route
              path="/placeOrder"
              element={
                <PrivetRoute>
                  {" "}
                  <PlaceOrder />
                </PrivetRoute>
              }
            ></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>

          {/* eita ke dynamic krtec caichi */}
            <Route path="drone" element={<Drone />}>
              <Route path=":Id" element={<BuyD />} />
            </Route>

            <Route
              path="shipping"
              element={
                <PrivetRoute>
                  <Shipping />
                </PrivetRoute>
              }
            ></Route>
            <Route path="*" element={<Inventory />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
