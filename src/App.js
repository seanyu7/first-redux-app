import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>Counter {counter}</h3>
      {isLogin ? <h3>logged in</h3> : <h3>Please Login</h3>}
    </div>
  );
}

export default App;
