import "./App.css";
import { Layout } from "./Components";
import { Home, Contact } from "./Pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
