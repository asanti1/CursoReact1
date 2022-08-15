import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("mmesage mounted");
    return () => {
      console.log("mmesage unmounted");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
