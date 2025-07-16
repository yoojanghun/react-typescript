// ref.current는 HTMLButtonElement | null 타입으로 자동 추론됨

import { useRef } from "react";

function Button() {

    const ref = useRef<HTMLButtonElement>(null);

    return(
        <button ref={ref}>Click me!!</button>    
    );
}

export default Button;