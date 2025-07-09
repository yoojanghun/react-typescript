// tuple : 고정된 개수의 요소들을 담을 수 있는 배열 타입

type Color = "red" | "blue" | "green" | "purple";

type buttonProps = {
    backgroundColor: Color;
    textColor: Color;
    fontSize: number;
    pillShape?: boolean;
    padding: [number, number, number, number];
}

function Button({ backgroundColor, textColor, fontSize, padding }: buttonProps) {

    return(
        <button style={{ backgroundColor: backgroundColor, 
                        color: textColor,
                        fontSize: fontSize,
                        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`}}>
            Click me!!
        </button>   
    );
}

export default Button;