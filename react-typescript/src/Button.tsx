// spread 연산자를 이용해 부모로부터 오는 수많은 prop들을 일일이 다 쓰지 않아도 됨
// 명시하지 않은 나머지 props를 한꺼번에 받아서 <button> 태그에 그대로 전달하는 역할

// ...rest: { defaultValue: "default", className: "class" }

type buttonProps = React.ComponentPropsWithoutRef<"button">;

function Button({ type, autoFocus, ...rest }: buttonProps) {

    return(
        <button type={type} autoFocus={autoFocus} {...rest}>Click me!!</button>    
    );
}

export default Button;