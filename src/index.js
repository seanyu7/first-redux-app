import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
//createStore に横線が入っているのは非推奨になっているからであって、使えないと言う意味ではない。

//storeを作る。
let store = createStore(counterReducer);

//actionsを作る。increment,decrementという名前のactionを作る。
//typeと書いてあるところは意味は特になく、ただの名前。定義しているだけ。
const incriment = () => {
  return{
    type: "INCREMENT",
  };
};

const decrement = () => {
  return{
    type: "DECREMENT",
  };
};
//reducerを作る。アクションと前の状態を組み合わせて新しい状態（state）を作る。
const counterReducer = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
