// count와 countHistory의 타입을 공통된 타입으로 연결하고 싶을 때 generic 사용

type ButtonProp<T> = {
    count: T;
    countHistory: T[];
}

function Button<T>({ count, countHistory }: ButtonProp<T>) {

    return(
        <h1>
            {String(count)}, {countHistory.map(c => String(c)).join(", ")}
        </h1>
    );
}

export default Button;

// function hello<T>(value: T):T {
//     return value
// }