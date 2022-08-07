import { useState } from "react";
import { loginUser, logoutUser } from "../helpers/firebase";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    loginUser(email, password); //state'teki value'lerden alır. oraya da form'dan gelir.
    console.log(email, password);
  };

  return (
	<div className="login">
		<h2>Login</h2>
      <form
        action=""
        className="flex flex-col bg-emerald-400 gap-6"
        onSubmit={handleSubmitLogin}
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
  )
};

export default Login;
