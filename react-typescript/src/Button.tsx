// Record 타입은 키와 값의 타입을 지정한 객체를 만들고 싶을 때 사용.

type buttonProps = {
    borderRadius: Record<string, number>
}

function Button({  }: buttonProps) {

    return(
        <button>
            Click me!!
        </button>   
    );
}

export default Button;