import {combineReducers} from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLogin";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogin: isLoginReducer,
});

//storeの中に複数のreducerを使うときは、それぞれをまとめて、combinereducerを使ってまとめる必要が存在する。
export default allReducers;