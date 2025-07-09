// union type을 이용해 원하는 값만 받을 수 있다.

type Color = "red" | "blue" | "green" | "purple";

type buttonProps = {
    backgroundColor: Color;
    textColor: Color;
    fontSize: number;
    pillShape?: boolean;
    padding: number[];
}

function Button({ backgroundColor, fontSize }: buttonProps) {

    return(
        <button style={{ backgroundColor: backgroundColor, fontSize: fontSize}}>
            Click me!!
        </button>   
    );
}

export default Button;