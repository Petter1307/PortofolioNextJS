import "./App.css";
import { Layout, ProtectedRoute } from "./Components";
import { Home, Contact, Admin, Login } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
// Admin route is unprotected temporarry. It will be a protected route someday
// TODO Think about a auth flow implementation.
