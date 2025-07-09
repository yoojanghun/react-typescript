// function을 App에서 Button으로 onClick이라는 Prop으로 넘긴다

type buttonProps = {
    onClick: (name: string) => string;
};

function Button({ onClick }: buttonProps) {

    return(
        <button onClick={() => console.log(onClick("mr.beast"))}>
            Click me!!
        </button>   
    );
}

export default Button;