// useState를 사용할 때 number, string, boolean에선 
// 굳이 타입 선언을 하지 않아도 된다. 
// 마우스를 올려 보면 타입스크립트가 count, text, isEmployeed의 타입을
// 정확히 추론하기 때문이다.

// useState를 사용할 때 object에선 타입을 선언해 주어야 한다.
// object에선 일단 초기값을 null로 한 후, 나중에 정보를 fetch하여
// object를 대입하는 경우가 많은데, useState(null)을 하면 
// user의 값이 object가 아닌 null이라고 추론할 수 있기 때문

import { useState } from "react";

type User = {
    name: string;
    age: number;
}

function Button() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("hello");
    const [isEmployeed, setIsEmployeed] = useState(true);

    const [user, setUser] = useState<User | null>(null);

    // user가 null일 수 있기 때문에, ?를 붙여 optional chaning을 한다.
    // user가 null 또는 undefined가 아닐 때만 user.name을 가져온다.
    // null 또는 undefined일 때는 undefined를 반환한다.
    const name = user?.name;

    function makeUser() {
        setUser({
            name: "hello",
            age: 33
        })
    }

    return(
        <button onClick={makeUser}>Click me!!</button>    
    );
}

export default Button;