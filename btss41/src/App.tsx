import Bt1 from "./components/bt1/Bt1";
import Bt10 from "./components/bt10/Bt10";
import Bt2 from "./components/bt2/Bt2";
import Bt3 from "./components/bt3/Bt3";
import Bt4 from "./components/bt4/Bt4";
import Bt5 from "./components/bt5/Bt5";
import Bt6 from "./components/bt6/Bt6";
import Bt7 from "./components/bt7/Bt7";
import Bt8 from "./components/bt8/Bt8";
import Bt9 from "./components/bt9/Bt9";

export default function App() {
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
      <Bt5 />
      <h2>Bài 6</h2>
      <Bt6 />
      <h2>Bài 8</h2>
      <Bt7 />
      <h2>Bài 7</h2>
      <Bt8 />
      <h2>Bài 9</h2>
      <div className="flex">
        <Bt9 />
        <div className="flex-1 p-10 text-white"></div>
      </div>
      <h2>Bài 10</h2>
      <Bt10/>
    </>
  );
}
