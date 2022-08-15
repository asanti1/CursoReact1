import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "fernando",
    email: "fernando@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("asd");
  }, []);

  useEffect(() => {
    console.log("asdasddsa");
  }, [formState]);

  useEffect(() => {
    console.log("asdasddsa");
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username === "fernando2" && <Message />}

      <input
        type="text"
        className="form-control mt-2"
        placeholder="mail@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
