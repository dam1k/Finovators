import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import routes from "./routes/index.js";
import AuthLayout from "./Pages/AuthLayout/AuthLayout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.authenticated.root} element={<AuthLayout />}>
          <Route
            path={routes.authenticated.dashboard}
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
