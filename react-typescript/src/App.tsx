import Button from "./Button.tsx";

function App() {

  return (
    <>
      <Button>Button 내부에 적힌 것을 children이라고 한다.</Button>
      <Button><div>안녕 반가워</div></Button>
      <Button>{true}</Button>
    </>
  );
}

export default App