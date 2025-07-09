import Button from "./Button.tsx";

function App() {

  const hello = (name: string) => `hello ${name}`;

  return (
    <Button onClick={hello}/>
  );
}

export default App