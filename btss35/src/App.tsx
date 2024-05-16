import Bt1 from "./components/Bt1";
import Bt2 from "./components/Bt2";
import Bt3 from "./components/Bt3";
import Bt4 from "./components/Bt4";
import Checkbox from "./components/Checkbox";
import Count from "./components/Count";
import CountText from "./components/CountText";
import Form from "./components/Form";
import Radio from "./components/Radio";
import Select from "./components/Select";
import "./index.css";

function App() {
  return (
    <>
      <h2>Bài 1</h2>
      <Bt1 />
      <h2>Bài 2</h2>
      <Bt2 />
      <h2>Bài 3</h2>
      <Bt3 />
      <h2>Bài 4</h2>
      <Bt4 />
      <h2>Bài 5</h2>
      <Form />
      <h2>Bài 6</h2>
      <Count />
      <h2>Bài 7</h2>
      <CountText />
      <h2>Bài 8</h2>
      <Select />
      <h2>Bài 9</h2>
      <Radio />
      <h2>Bài 10</h2>
      <Checkbox />
    </>
  );
}

export default App;
