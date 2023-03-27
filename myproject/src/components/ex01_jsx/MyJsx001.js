import React from "react"; // 버전이 낮을때 사용

// 리액트 17이전 버전에서는 JSX 구문이 있는 파일은 반드시 import React from 'react'문을 사용해야한다.
// 그러나 17이후 버전부터는 import React from 'react'가 생략 가능하다.

// function MyJsx002(){

//}

const MyJsx001 = () => {
  return (
    <div>
      <div>Hello</div>
      <div>React</div>
    </div>
  );
};
//Myjsx001외부에서 사용하기위해
export default MyJsx001;
