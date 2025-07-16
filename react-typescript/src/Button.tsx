// 처음 페이지가 1번 로드될 때 localStorage에서 하나의 값을 읽어들임

// as는 타입 단언 문법
// typescript에게 이 값은 이 타입이라고 강제로 알려주는 문법

// localStorage.getItem()은 항상 string | null반환
// 하지만 우리는 이 값이 red, blue, orange 중 하나라고 확신

type ButtonColor = "red" | "blue" | "orange";

import { useEffect } from "react";

function Button() {

    return(
        useEffect(() => {
            const previousBtnColor = localStorage.getItem("btnColor") as ButtonColor
        }, [])
    );
}

export default Button;