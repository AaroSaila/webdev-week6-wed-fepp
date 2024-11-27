import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const [passwordIsSame, setPasswordIsSame] = useState('');
  const { error, signup } = useSignup(setIsAuthenticated);

    const handleSignup = async () => {
        await signup(email, password);
    };



  useEffect(() => {
    console.log("pwd changed");

    if (password !== password2)
      setPasswordIsSame("Passwords do not match");
    else
      setPasswordIsSame("");
  },[password, password2, passwordIsSame])

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <span>{error}</span>}
      </label>
      <label>
        Retype password:
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          />
      </label>
          <p>{passwordIsSame}</p>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
