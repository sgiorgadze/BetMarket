import logo from './logo.svg';
import './App.scss';

import Sidebar from "./components/layout/SideBar"
import MainSection from "./components/layout/MainSection"

function App() {
  return (
    <div className="App">
      <div className="container-wrapper">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
