import { useState } from "react";

const SatatefulForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState('Ishrakul Tahmid');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
            return;
        }
        else {
            setError('');
        }
        console.log(name, email, password);
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}
                    type="text" name='name' value={name}></input>
                <br></br>
                <input onChange={handleEmailChange}
                    type="email" name="email" />
                <br></br>
                <input onChange={handlePasswordChange}
                    type="password" name="password" required />
                <br></br>
                <button type='submit'>Submit</button>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default SatatefulForm;