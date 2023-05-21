import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";
import History from "./pages/History";
import OrderSucess from "./pages/OrderSucess/indes";

export function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/history" element={<History />} />
                <Route path="/order/sucess" element={<OrderSucess />} />
            </Switch>
        </Router>
    )
}