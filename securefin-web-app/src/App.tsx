import "./App.scss";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./AppRoutes";
// import Login from './pages/Auth/Login/Login';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;

