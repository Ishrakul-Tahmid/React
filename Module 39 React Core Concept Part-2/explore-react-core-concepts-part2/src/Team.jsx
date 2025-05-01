import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        setTeam(team + 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
    }

    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={() => setTeam(team - 1)}>Reduce</button>
        </div>
    )
}