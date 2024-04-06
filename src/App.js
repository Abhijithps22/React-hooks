import "./App.css";
import Drill from "./components/Drill";
import Effect from "./components/Effect";
import Memo from "./components/Memo";
import Reducer from "./components/Reducer";
import State from "./components/State";
import Context from "./components/usecontext/Context";

function App() {
  return (
    <div className="App">
      <State />
      <Effect />
      <Drill />
      <Context />
      <Reducer />
      <Memo />
    </div>
  );
}

export default App;
