const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};
//ここで書かれているものは、storeの中のreducerにどのような動きをして欲しいかを書いているだけ。
//初期値を設定して、そのあとにaction.typeによってどのような動きをするかを書いている。

export default isLoginReducer;
