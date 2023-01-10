const counteReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
//ここで書かれているものは、storeの中のreducerにどのような動きをして欲しいかを書いているだけ。
//初期値を設定して、そのあとにaction.typeによってどのような動きをするかを書いている。

export default counteReducer;