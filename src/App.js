import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "./Admin";
import "./App.css";
import { PostContainer } from "./PostContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PostContainer />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
