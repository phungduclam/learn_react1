// import "./App.css";
import ColoerBox from "./components/ColorBox";
import Counter from "./components/Counter";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <TodoFeature />
      {/* <AlbumFeature /> */}
      {/* <ColoerBox />
      <Counter /> */}
    </div>
  );
}

export default App;
