import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    // const history = useHistory();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                window.location.href = '/home';
            }
            else {
                // Login failed, display error message
                alert(data.message);
            }
        } catch (error) {
        console.error(error);
        alert('Wrong password.');
        
        }
    }

    return (
        
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
            <div className="40-w p-5 bg-white rounded-3">
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="mb-3 mt-3">
                    <label htmlFor="username" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
    );
}