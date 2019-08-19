import React, { useState } from 'react';
import './App.css';
//import usePlayground from '../../Hooks/usePlayground.js';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.js';
import Playground from '../Playground/Playground.js';

const App = () => {
  const [ userType, setUserType ] = useState('');
  const [ characterList, setCharacterList ] = useState(['mLdzKAN7AAGt3qPP2']);

  const userTypeSelectHandler = (event) => {
    const selectedType = event.target.value;
    setUserType(selectedType);
  };

  const addCharacterHandler = (characterId) => {
    const newCharacterList = [...characterList, characterId]
    setCharacterList(newCharacterList);
  }

  let content = (
      <WelcomeScreen userTypeSelect={userTypeSelectHandler} userType={userType} />
    );

  if(userType) {
    content = (
      <div className="main">
        <Playground 
        playgroundType={userType} 
        returnHandler={userTypeSelectHandler} 
        addCharacterHandler={addCharacterHandler} 
        characters={characterList} />
      </div>
  )};
  return content;
} 
export default App;

//All available character information can be fetched using the following url setup:
//
//characterId = 'mLdzKAN7AAGt3qPP2';
//APIkey = 'QRryrEJEF27FDcPsZgWZZvhHhf5a3t';
//characterUrl = `https://dicecloud.com/vmix-character/${characterId}?key=${APIkey}`;