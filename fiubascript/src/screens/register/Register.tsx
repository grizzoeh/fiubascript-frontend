import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(false);


    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
        setPasswordsMatch(event.target.value === repeatPassword);
    }

    function handleRepeatPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRepeatPassword(event.target.value);
        setPasswordsMatch(event.target.value === password);
    }

    // const history = useHistory();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log("vars are: ", name, lastName, email, password, repeatPassword);
        event.preventDefault();
        if (!passwordsMatch) {
        return;
        }
        try {
        const response = await fetch('https://fiubascript-backend.onrender.com/auth/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, lastName, email, password }),
        });
        if (response.ok) {
            // Registration successful, redirect to login page
            navigate('/login');
        } else {
            // Registration failed, display error message
            const data = await response.json();
            alert(data.message);
        }
        } catch (error) {
        console.error(error);
        alert('An error occurred while registering. Please try again later.');
        }

}

    return (
        
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
            <div className="40-w p-5 bg-white rounded-3">
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="username" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={handlePasswordChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="repeat-password" className="form-label">Repeat Password</label>
                    <input type="password" className="form-control" id="repeat-password" placeholder="Repeat Password" onChange={handleRepeatPasswordChange} />
                    {passwordsMatch ? null : <div className="text-danger">Passwords do not match</div>}
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            </div>
        </div>
    );
}