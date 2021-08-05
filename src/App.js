import "./App.scss";
import SideBar from "./components/Section1/Index";
import Chat from "./components/Section2/Index";

function App() {
  return (
    <div className="App">
      <div className="section1">
        <SideBar />
      </div>
      <div className="section2">
        <Chat />
      </div>
      <div className="section3">
        <SideBar />
      </div>
      <div className="section4">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
