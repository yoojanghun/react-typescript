// Type Alias VS Interface
// Interface를 사용하면 object에 대해서만 타입을 지정할 수 있다.

// ComponentProps<> 타입을 이용하면 <> 안의 요소에 해당되는 모든 Prop들을 
// 명시하지 않아도 바로 이용 가능

// type buttonProps = {
//     type: "submit" | "reset" | "button";
//     autoFocus?: boolean;
// }

// 부모(App.tsx)에서 ref={ref}를 이용하면 WithRef, 이용 안 하면 WithoutRef 붙임
type buttonProps = React.ComponentPropsWithoutRef<"button">;

function Button({ type, autoFocus, className }: buttonProps) {

    return(
        <button type={type} autoFocus={autoFocus} className={className} >Click me!!</button>    
    );
}

export default Button;