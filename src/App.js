import "./App.css";
import { useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>Counter {counter}</h3>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isLogin ? <h3>logged in</h3> : <h3>Please Login</h3>}
    </div>
  );
}

export default App;
