import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "../../components/BackgroundContainer/BackgroundContainer";
import triviaTitle from '../../assets/TrivIA.png';
import { Loader } from "../../components/Loader/Loader";
import { LoginResponse } from "../../interfaces/userSessionInterface";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userInfo, setUserInfo } = useUser();
    const [loading , setLoading] = useState(false);

    // const history = useHistory();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        try{
            const response = await fetch("https://fiubascript-backend.onrender.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json() as LoginResponse;
            console.log("Data: ",data);
            if (response.ok) {
                setUserInfo({
                    token: data.authentication.sessionToken,
                    id: data._id,
                    firstName: data.name,
                    lastName: data.lastName,
                    email: data.email,
                    coins: data.coins,
                    characters: data.characters,
                    currentCharacter: data.currentCharacter || 0, 
                });

                navigate("/home");
                setLoading(false);
            }
            else {
                alert("Wrong password.");
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            alert('Wrong password.');
            setLoading(false);
        }
    }

    return (
        <BackgroundContainer>
        {
            loading && <Loader />
        }
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
                <div className="align-items-center mb-3">
                <button type="submit" className="btn btn-primary text-white align-center bg-primary-light">Ingresar</button>
                </div>
                <div className="mb-3">
                <a href="/register" className="btn btn-link text-white">¿No tenés cuenta? Ingresá acá</a>     
                </div>    
            </form>
            </div>
        </div>
        </BackgroundContainer>
    );
}