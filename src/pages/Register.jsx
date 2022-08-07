import { useState } from "react";
import { createUser } from "../helpers/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    createUser(email, password); //state'teki value'lerden alır. oraya da form'dan gelir.
    console.log(email, password);
  };

  return (
    <div className="register App flex flex-col gap-6 justify-center items-center mt-20">
		<h2>Register</h2>
      <form
        action=""
        className="flex flex-col bg-emerald-400 gap-6"
        onSubmit={handleSubmitRegister}
      >
        <input
          type="email"
          placeholder="E-mail"
          value={email} //ilk seferde uncontrolled input hatası verir, useState'içinde boş string'i verdiğimizde bu hata gider.
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
