import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Input from "./components/Input";
import Select from "./components/Select";
import Modal from './components/Modal/Modal';
import OverlayModal from './components/Modal/OverlayModal';


function App() {

  return (
    <div style={{ margin: "8px" }}>
      <Buttons />
      <Input />
      
      <div>
        <h1>Modal</h1>
        <div style={{ display: "flex", gap:"10px" }}>
          <Modal />
          <OverlayModal />
        </div>
      </div>

      <Select />
    </div>
  );
}

export default App;
