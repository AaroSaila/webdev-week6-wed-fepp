import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const [passwordsMatchText, setPasswordsMatchText] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignup = async () => {
  };

  
  useEffect(() => {
    if (password !== password2){
      setPasswordsMatchText("Passwords do not match");
      setPasswordsMatch(false)  
    }
    else {
      setPasswordsMatchText("");
      setPasswordsMatch(true);
    }
  },[password, password2, passwordsMatchText, passwordsMatch])

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
      </label>
      <label>
        Retype password:
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          />
      </label>
          <p>{passwordsMatchText}</p>
      <br />
        <button disabled={!passwordsMatch} style={!passwordsMatch ? {color: "red", backgroundColor: "gray"} : {} } onClick={handleSignup}>Sign Up</button>
      
    </div>
  );
};

export default SignupComponent;
