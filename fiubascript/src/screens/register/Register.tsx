import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "../../components/BackgroundContainer/BackgroundContainer";
import triviaTitle from '../../assets/TrivIA.png';
import { Loader } from "../../components/Loader/Loader";

export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [loading , setLoading] = useState(false);


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
        setLoading(true);
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
            setLoading(false);
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
        <BackgroundContainer>
        {
            loading && <Loader />
        }
        <div className="centered-image mb-3" style={{marginTop: '1rem'}}>
            <img src={triviaTitle} alt="TrivIA Title" />
        </div>
        <div className="login template d-flex justify-content-center align-items-center">
            <div className="40-w">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-primary-lighter">Nombre</label>
                    <input type="text" className="form-control rounded-pill" id="name" placeholder="Nombre" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-primary-lighter">Apellido</label>
                    <input type="text" className="form-control rounded-pill" id="lastName" placeholder="Apellido" onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="username" className="form-label text-primary-lighter">Email</label>
                    <input type="email" className="form-control rounded-pill" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-primary-lighter">Contraseña</label>
                    <input type="password" className="form-control rounded-pill" id="password" placeholder="Contraseña" onChange={handlePasswordChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="repeat-password" className="form-label text-primary-lighter">Repetir contraseña</label>
                    <input type="password" className="form-control rounded-pill" id="repeat-password" placeholder="Repetir contraseña" onChange={handleRepeatPasswordChange} />
                    {passwordsMatch ? null : <div className="text-danger">Las contraseñas no coinciden</div>}
                </div>

                <div className="mb-3">  
                <button type="submit" className="btn btn-primary text-white align-center bg-primary-light">Registrarse</button>
                </div>

                <div className="mb-3">
                <a href="/login" className="btn btn-link text-white">¿Ya tenés cuenta? Ingresá acá</a>     
                </div>       
                </form>
            </div>
        </div>
        </BackgroundContainer>
    );
}