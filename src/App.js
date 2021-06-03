import './App.css';
import Footer from './components/Footer';
import HardestToComplete from './components/HardestToComplete';
import Header from './components/Header';
import StickerTable from './components/StickerTable';


function App() {
  return (
    <div className="container-fluid px-0">
      <Header />
      <StickerTable />
      <HardestToComplete />
      <Footer />
    </div>
  );
}

export default App;
