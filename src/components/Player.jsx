import { useState } from "react"


export default function Player({intialName , symbol}){
    const[plyerName , setPlayerName] = useState(intialName);
    const[isEditing , setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    let editablePlayerName = <span className="player-name">{plyerName}</span>
    // let btnCaption = 'Edit';

    function handleChange(event) {
        // console.log(event);
        setPlayerName(event.target.value);
    }

    if (isEditing) {
        editablePlayerName = (
        <input type="text" required value={plyerName} onChange={handleChange}/>
        );
        // btnCaption = "Save"
    }

    return (
    <li>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
    );
}