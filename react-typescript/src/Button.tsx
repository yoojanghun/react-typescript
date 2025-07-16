// as const를 추가한 후 마우스를 올려보면 
// const btnTextOptions: readonly ["Click me!", "Click me again!", "Click me one more time!"]
// 위처럼 readonly 튜플로 인식됨(값 변경 불가)

// as const 추가 안하면 btnTextOptions는 그냥 string[]으로 추론함

function Button() {

    const btnTextOptions = [
        "Click me!", 
        "Click me again!",
        "Click me one more time!"
    ] as const;

    return(
        <button>
            {btnTextOptions.map(option => {
                return option;
            })}
        </button>    
    );
}

export default Button;