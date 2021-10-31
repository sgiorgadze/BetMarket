import logo from './logo.svg';
import './App.scss';

import Sidebar from "./components/layout/SideBar"
import Header from "./components/layout/Header"
import OfferBlock from "./components/OfferBlock/OfferBlock"


function App() {
  return (
    <div className="App">
      <div className="container-wrapper">
        <Sidebar />
        <section className="section_box main_section">
          <Header />
          <OfferBlock />
        </section>

      </div>
    </div>
  );
}

export default App;
