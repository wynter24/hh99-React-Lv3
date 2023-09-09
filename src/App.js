import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Input from "./components/Input";
import Select from "./components/Select";
import Modal from './components/Modal';

function App() {

  return (
    <div style={{ margin: "8px" }}>
      <Buttons />
      <Input />
      <Modal/>
      <Select />
    </div>
  );
}

export default App;
