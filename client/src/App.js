import logo from "./logo.svg";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Post /> */}
      <Login />
    </div>
  );
}

export default App;
