import './App.scss';

import { useWindowSize } from './hooks/useWindowSize';


import Sidebar from "./components/layout/SideBar"
import Header from "./components/layout/Header"
import OfferBlock from "./components/OfferBlock/OfferBlock"


function App() {
  const size = useWindowSize();
  return (
    <div className="App">
      <div className="container-wrapper">
        {size.width >= 1001 && <Sidebar />}
        <section className="section_box main_section">
          <Header />
          <OfferBlock />
        </section>

      </div>
    </div>
  );
}

export default App;
