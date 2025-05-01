export default function Friend({ friend }) {
    
    const {name, email} = friend; // Destructuring the friend object to extract name and email

    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}