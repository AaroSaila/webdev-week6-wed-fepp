import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { error, signup } = useSignup(setIsAuthenticated);


    const handleLogin = async () => {
        await signup(email, password);
    };


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
            <br />
            <button onClick={handleLogin}>Sign Up</button>
        </div>
    );
};

export default SignupComponent;
