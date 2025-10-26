// number[] 라고 파라미터 타입을 설정하면 string을 못 받음
// any[] 라고 파라미터 타입을 설정하면 string을 받을 수 있지만 받은 string은 any 타입
// (number | string)[] 이라고 하면 type이 하나가 아닌 (string | number)로 설정됨

function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

function Generics() {

  const numbers = [100, 2, 3];
  const firstNum = getFirstElement(numbers);
  console.log(firstNum);

  const strings = ["pizza", "chicken"];
  const firstString = getFirstElement<string>(strings);   // 이렇게 입력 type 명시도 가능
  console.log(firstString);

  return (
    <h2>Generics in function</h2>
  );
}

export default Generics;