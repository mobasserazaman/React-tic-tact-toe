import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function handleEditClick(){
        /**If your new state depends on your prev state, you should NOT update like this
         * setIsEditing(!isEditing); 
         * Behind the scenes React schedules state updates that we trigger with the state updating functions
         * such as setIsEditing(). The update is not performed instantly. 
         * It is done in the near future, in about 1 or 2 milliseconds. */

        /**Instead, pass a function to your state updating function. 
         * This function will automatically be called by React and will receive the
         * guaranteed latest state value. 
         * 
         * Try it! For example we would expect to see no change in the edit button if we do
         * 
         * setIsEditing(!isEditing); => schedules an update to true
         * setIsEditing(!isEditing); => schedules an update to true again instead of false because state hasn't changed yet
         * 
         * but we still see Edit turn to Save. This is because React does not instantly do state updates.
         * 
         * This will work and you will see no change because React will grab the latest 
         * value of isEditing before triggering the second state update
         *  
         * setIsEditing(isEditing => !isEditing);
         * setIsEditing(isEditing => !isEditing);
         * 
         * */
        setIsEditing(wasEditing => !wasEditing);
        if(isEditing) onChangeName(symbol, playerName);
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive? 'active' : undefined}>
        <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" required value={playerName} onChange={handleChange}></input>}
        <span className="player-symbol">{symbol}</span>              
        </span>
        <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
      </li>
    );
}