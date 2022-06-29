import "./App.css";
import { Layout, ProtectedRoute } from "./Components";
import { Home, Contact, Admin, Auth } from "./Pages";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Auth />} />
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
      </AuthProvider>
    </div>
  );
}

export default App;
// Admin route is unprotected temporarry. It will be a protected route someday
// TODO Think about a auth flow implementation.
