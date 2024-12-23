import './App.css';
import './index.css';
import './assets/css/responsive.css';
import './assets/css/satoshi.css';
import Quotes from "./pages/quotes/index";
import QuoteRequest from "./pages/quotes/request";
import Dashboard from "./pages/dashboard/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
        <Router>
          <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/quotes"} element={<Quotes />} />
        <Route path={"/quote-request"} element={<QuoteRequest />} />
           
          </Routes>
        </Router>
  );
}

export default App;
