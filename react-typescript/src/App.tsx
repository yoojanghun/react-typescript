import { useState } from "react";
import Button from "./Button.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button count={count} countIncrement={setCount} />
    </>
  );
}

export default App