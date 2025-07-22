// count와 countHistory의 타입을 공통된 타입으로 연결하고 싶을 때 generic 사용
// App.tsx에서 count와 countHistory안의 값은 공통된 type이어야 함.

import { type Color } from "./lib/types";

type ButtonProp = {
    color: Color;
}

function Button({ color }: ButtonProp) {

    return(
        <h1 style={{color}}>
            안녕
        </h1>
    );
}

export default Button;

// function hello<T>(value: T):T {
//     return value
// }