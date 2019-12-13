import React from 'react';
import useForm from 'react-hook-form';

import './NewCharacterForm.css';

export function NewCharacterForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => 
  {
    props.onNewCharacter(data.url, data.api, data.name);
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Add New Character:</label>
        <input className="search-element" type="url" placeholder="Dicecloud URL" name="url" ref={register({required: true})} />
        {errors.url && <p className="input-error">Your input is required</p>}
        <input className="search-element" type="text" placeholder="Dicecloud API" name="api" ref={register({required: true})} />
        {errors.api && <p className="input-error">Your input is required</p>}
        <input className="search-element" type="text" placeholder="Character Name" name="name" ref={register({required: true})} />
        {errors.name && <p className="input-error">Your input is required</p>}

        <input className="my-button" type="submit" />
      </form>

      <ul className="delete-list" >
        {props.characters.map((charData, index) => (
          <li key={index} >{charData.name + ' '} 
            <button className="delete" onClick={props.onRemoveCharacter} value={charData.name} > Remove </button>
          </li>
        ))}
        <li key="removeAll" > 
          <button className="delete" onClick={props.onRemoveCharacter} value="REMOVE-ALL" >Remove All Characters</button>
        </li>
      </ul>
    </React.Fragment>
  );
}