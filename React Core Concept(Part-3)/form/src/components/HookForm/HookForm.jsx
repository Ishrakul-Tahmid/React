import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    // const [name, handleChangeName] = useInputState('Ishrakul Tahmid');
    const nameState = useInputState('Ishrakul Tahmid');
    // const [email, handleChangeEmail] = useInputState('');
    // const [password, handleChangePassword] = useInputState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', nameState.value);
        // console.log('Email:', email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name='name'></input>
                <br></br>
                <input  type="email" name="email" />
                <br></br>
                <input  type="password" name="password" />
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default HookForm;