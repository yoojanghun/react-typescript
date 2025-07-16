// value에 string 도 넣고 싶고, number 도 넣고 싶음.
// any라고 하면 typescript의 타입 검사 기능을 꺼버림.
// 만약 value에서 toUpperCase 메소드를 사용하면 string은 문제 없지만,
// number에서 문제가 생긴다. (number에선 toUpperCase가 없어서)

// 그래서 generic을 사용하여 어떤 타입이든 유연하게 받을 수 있도록 해 줌.
// 먼저 함수의 매개변수를 받고, 타입을 나중에 정할 수 있도록 함.

function Button() {

    // function convertToArr(value: any) {
    //     return [value];
    // }

    function convertToArr<T>(value: T): T[] {
        return [value];
    }

    convertToArr(5);
    convertToArr("hello");

    return(
    );
}

export default Button;