import SideBar from "./components/SideBar";
import Content from './components/Content';
import TopBar from "./components/TopBar";

function App() {
  return (
      <div className="flex bg-slate-800 w-screen min-h-screen font-sans" id="mainDiv" font="0">
        <SideBar></SideBar>
        <TopBar></TopBar>
        <Content></Content>
      </div>
  );
}

export default App;
