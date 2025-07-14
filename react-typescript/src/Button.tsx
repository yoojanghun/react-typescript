type buttonProps = {
    type: "button" | "submit" | "reset";
    color: "red" | "blue" | "green";
}

type superButtonProps = buttonProps & {
    padding: [number, number, number, number];
}

function Button({ type, color, padding }: superButtonProps) {

    return(
        <button type={type} 
            style={{color: color, 
                    padding:`${padding[0]}px ${padding[1]}px 
                            ${padding[2]}px ${padding[3]}px`}} >
            Click me!!
        </button>    
    );
}

export default Button;