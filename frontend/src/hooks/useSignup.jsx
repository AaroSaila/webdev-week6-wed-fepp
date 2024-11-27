import { useState } from "react";


export const useSignup = () => {
    const [error, setError] = useState(null);

    const signup = async (email, password) => {
        setError(null);
        try {
            const response = await fetch("/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const user = await response.json();
                localStorage.setItem("user", JSON.stringify(user));
                console.log("User signed up successfully!");
                setIsAuthenticated(true);
                navigate("/");
            } else {
                console.error("Signup failed", response);
                setError(response.error);
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    }
}
