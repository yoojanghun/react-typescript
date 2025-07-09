// React.CSSProperties 라고 하면 style 객체를 우리들이 하나하나 정할 필요가 없다.

type buttonProps = {
    // style: {
    //     backgroundColor: string;
    //     fontSize: number;
    //     color: string;
    // }
    style: React.CSSProperties;
}

function Button({ style }: buttonProps) {

    return(
        <button style={ style }>
            Click me!!
        </button>   
    );
}

export default Button;