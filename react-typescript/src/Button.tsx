// unknown 타입은 무슨 타입인지 알 수 없음을 나타내는 타입이지만,
// any와는 다르게 안정성이 보장됨.
// any처럼 아무거나 다 허용하진 않고, 안전하게 사용할 수 있게 하려는 목적일 때

import { useEffect } from "react";
import { type Color } from "./lib/types";

type ButtonProp = {
    color: Color;
}

function Button({ color }: ButtonProp) {

    const valueAny: any = "   hello   "
    const valueUnknown: unknown = "   hello   ";

    const trimAny = valueAny.trim();                // 오류 X
    const trimUnknwon = valueUnknown.trim();        // 오류 O

    // unknown은 어떤 값이긴 한데, 이것을 쓸 자격이 있다고 확인해 줘야만 
    // 쓸 수 있다. 
    
    if(typeof valueUnknown === "string") {
        const trimUnknwon = valueUnknown.trim();   
    }
    // valueUnknwon이 string임을 보장해야 trim메소드를 사용 가능

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/totos/1")
        .then(response => response.json())
        .then((data: unknown) => console.log(data));
    }, [])

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