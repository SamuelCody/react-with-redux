import Leftbar from "./components/leftbar/LeftBar";
import Navbar from "./components/navbar/NavBar";
import Rightbar from "./components/rightbar/RightBar";
import Update from "./components/update/Update";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
