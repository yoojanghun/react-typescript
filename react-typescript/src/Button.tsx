// 컴포넌트의 children을 타입으로 표현할 때 사용하는 가장 일반적인 타입이다.
// React.ReactNode : JSX안에 들어올 수 있는 모든 것을 포함하는 타입 (문자열, 숫자, JSX 요소, 배열, null, undefined, boolean등)
// JSX 요소 : HTML 구조를 자바스크립트 코드 안에서 표현한 것 (<div></div>, <h1></h1> 등)

type buttonProps = {
    children: React.ReactNode;
};

function Button({ children }: buttonProps) {

    return(
        <button>{children}</button>   
    );
}

export default Button;