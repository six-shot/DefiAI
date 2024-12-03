import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./modules/home";
import Chat from "./pages/chat";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
