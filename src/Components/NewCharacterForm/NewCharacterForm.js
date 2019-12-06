import React from 'react';
import useForm from 'react-hook-form';

import './NewCharacterForm.css';

export function NewCharacterForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => 
  {
    props.onNewCharacter(data.url, data.api, data.name);
    console.log(data);
  }
  // console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add New Character:</h1>
      <input className="search-element" type="url" placeholder="Dicecloud URL" name="url" ref={register({required: true})} />
      <input className="search-element" type="text" placeholder="Dicecloud API" name="api" ref={register} />
      <input className="search-element" type="text" placeholder="Character Name" name="name" ref={register({required: true})} />

      <input className="my-button" type="submit" />
    </form>
  );
}