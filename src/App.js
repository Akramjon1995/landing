import './App.css';
import HardestToComplete from './components/HardestToComplete';
import Header from './components/Header';
import StickerTable from './components/StickerTable';


function App() {
  return (
    <div className="container-fluid px-0">
      <Header />
      <StickerTable />
      <HardestToComplete />
      
    </div>
  );
}

export default App;
