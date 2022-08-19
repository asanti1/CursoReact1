import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input type="text" placeholder="Ingrese nombre" ref={inputRef} />

      <button className="btn btn-primary mt-2">Set Focus</button>
    </>
  );
};
