// Type Alias VS Interface
// Interface를 사용하면 object에 대해서만 타입을 지정할 수 있다.

// ComponentProps<> 타입을 이용하면 <> 안의 요소에 해당되는 모든 Prop들을 
// 명시하지 않아도 바로 이용 가능

// type buttonProps = {
//     type: "submit" | "reset" | "button";
//     autoFocus?: boolean;
// }

type buttonProps = React.ComponentProps<"button">;

function Button({ type, autoFocus }: buttonProps) {

    return(
        <button type={type} autoFocus={autoFocus}>Click me!!</button>    
    );
}

export default Button;