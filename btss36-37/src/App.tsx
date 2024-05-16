import ChangeTitle from "./components/ChangeTitle";
import Clock from "./components/Clock";
import CountClick from "./components/CountClick";
import Counter from "./components/Counter";
import CounterTimeRender from "./components/CounterTimeRender";
import FocusInput from "./components/FocusInput";
import KeyPress from "./components/KeyPress";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import Season from "./components/Season";

export default function App() {
  return (
    <>
      <h2>Bài 1</h2>
      <ChangeTitle />
      <h2>Bài 2</h2>
      <CountClick />
      <h2>Bài 3</h2>
      <Navbar/>
      <h2>Bài 4</h2>
      <FocusInput/>
      <h2>Bài 5</h2>
      <Clock/>
      <h2>Bài 6</h2>
      <Scroll/>
      <h2>Bài 7</h2>
      <Counter/>
      <h2>Bài 8</h2>
      <Season/>
      <h2>Bài 9</h2>
      <CounterTimeRender/>
      <h2>Bài 10</h2>
      <KeyPress/>
    </>
  );
}
