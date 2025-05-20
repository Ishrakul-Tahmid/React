
const ReusableForm = ({ formTitle, handleSubmit, submitBtnText = 'Submit', children }) => {
    
    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name='name'></input>
                <br></br>
                <input type="email" name="email" id="" />
                <br></br>
                <input type="password" name="password" id="" />
                <br></br>
                <button type='submit'>{submitBtnText}</button>
            </form>
        </div>
    );
};

export default ReusableForm;