import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "../../components/BackgroundContainer/BackgroundContainer";
import triviaTitle from '../../assets/TrivIA.png';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userInfo, setUserInfo } = useUser();

    // const history = useHistory();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log("Email: ", email);
        e.preventDefault();
        try{
            const response = await fetch("https://fiubascript-backend.onrender.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            console.log("Data: ",data);
            if (response.ok) {
                setUserInfo({
                    token: data.authentication.sessionToken,
                    id: data._id,
                    firstName: data.name,
                    lastName: data.lastName,
                    email: data.email
                });

                navigate("/home");
            }
            else {
                // Login failed, display error message
                alert("Wrong password.");
            }
        } catch (error) {
        console.error(error);
        alert('Wrong password.');
        
        }
    }

    return (
        <BackgroundContainer>
        <div className="centered-image mb-5">
            <img src={triviaTitle} alt="TrivIA Title" />
        </div>
        <div className="login template d-flex justify-content-center align-items-center">
            <div className="40-w">
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-2">
                    <label htmlFor="username" className="form-label text-primary-lighter">Email</label>
                    <input type="email" className="form-control rounded-pill" id="email" placeholder="Ingresar email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label text-primary-lighter">Contraseña</label>
                    <input type="password" className="form-control rounded-pill" id="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="align-items-center">
                <button type="submit" className="btn btn-primary text-white align-center bg-primary-light">Ingresar</button>
                </div>
            </form>
            </div>
        </div>
        </BackgroundContainer>
    );
}