import React, { useState } from 'react';
import './App.css';
//import usePlayground from '../../Hooks/usePlayground.js';
import WelcomeScreen from '../WelcomeScreen';
import Playground from '../Playground';

const App = () => {
  const [ userType, setUserType ] = useState('');
  const [ characterList, setCharacterList ] = useState([
    {
      id: 'mLdzKAN7AAGt3qPP2',
      name: 'Harley Merlin'
    },
    {
      id: 'siQfxrFNzgWHoQk39',
      name: 'Surina Kerrhylon'
    },
    {
      id: 'xS8JoRmvpsnjm529p',
      name: 'Draud'
    }
  ]);
  const [ resourceList, setResourceList ] = useState([
    'Spells',
    'Equipment',
    'Proficiencies'
    // {
    //   id: 0,
    //   name: 'Spells'
    // },
    // {
    //   id: 1,
    //   name: 'Equipment'
    // },
    // {
    //   id: 2,
    //   name: 'Proficiencies'
    // }
  ]);
  const [ mapList, setMapList ] = useState([
    {
      id: 0,
      name: 'World Map',
      src: '/WorldMap_small.jpg',
      src_large: '/WorldMap.jpg',
      alt: 'The world map of Miradonia',
      desc: 'Miradonia consists of two main continents. It is populated by a variety of races and monsters. '
    },
    {
      id: 1,
      name: 'Regional Map',
      src: '/RegionalMap_small.jpg',
      src_large: '/RegionalMap.jpg',
      alt: 'The region map of Mistwood',
      desc: ''
    }
  ]);
  const [ selectedCharacter, setSelectedCharacter ] = useState('mLdzKAN7AAGt3qPP2');
  const [ selectedResource, setSelectedResource ] = useState('Spells');
  const [ selectedMap, setSelectedMap ] = useState(0);
  const userTypeSelectHandler = (event) => {
    const selectedType = event.target.value;
    setUserType(selectedType);
  };

  const addCharacterHandler = (characterId, characterName) => {
    const newCharacterList = [...characterList, { id: characterId, name: characterName }];
    setCharacterList(newCharacterList);
  }
  
  const selectResourceHandler = (event) => {
    const resource = event.target.value;
    setSelectedResource(resource);
  }

  const selectCharacterHandler = (event) => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  }

  const selectMapHandler = (event) => {
    const mapId = event.target.value;
    setSelectedMap(mapId);
  }

  let content = (
      <WelcomeScreen userTypeSelect={userTypeSelectHandler} userType={userType} />
    );

  if(userType) {
    content = (
      <div className="main">
        <Playground 
        playgroundType={userType} 
        onReturn={userTypeSelectHandler} 
        onNewCharacter={addCharacterHandler} 
        characters={characterList}
        selectedChar={selectedCharacter} 
        onCharSelect={selectCharacterHandler}
        resources={resourceList}
        selectedResource={selectedResource}
        onResourceSelect={selectResourceHandler}
        maps={mapList}
        selectedMap={selectedMap}
        onMapSelect={selectMapHandler}
         />
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