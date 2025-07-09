type buttonProps = {
    backgroundColor: string;
    fontSize: number;
    pillShape?: boolean;
}
// pillShape 뒤에 ?를 붙이면 Prop을 보내도 되고 안 보내도 된다.

function Button({ backgroundColor, fontSize }: buttonProps) {

    return(
        <button style={{ backgroundColor: backgroundColor, fontSize: fontSize}}>
            Click me!!
        </button>   
    );
}

export default Button;