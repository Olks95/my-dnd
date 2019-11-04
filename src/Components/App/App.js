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
  ]);
  const [ mapList, setMapList ] = useState([
    {
      id: 0,
      name: 'World Map',
      src: '/WorldMap.jpg',
      src_large: '/WorldMap_large.jpg',
      alt: 'The world map of Miradonia',
      desc: 'Miradonia consists of two main continents. It is populated by a variety of races and monsters. '
    },
    {
      id: 1,
      name: 'Regional Map',
      src: '/RegionalMap.jpg',
      src_large: '/RegionalMap_large.jpg',
      alt: 'The region map of Mistwood',
      desc: 'The region of Mistwood holds the main travel route between the north and south. The Mist Woods themselves are the homeland for many wood elves, while the Knife Edge Mountains is the home to some smaller groups of Dwarves. Elesgate is the capital of the region, being a natural stop for any who travel north-south. The Silver River connects Elesgate to Martslock which functions as the main port.'
    }
  ]);
  const [ selectedCharacter, setSelectedCharacter ] = useState('mLdzKAN7AAGt3qPP2');
  const [ selectedResource, setSelectedResource ] = useState('Spells');
  const [ query, setQuery ] = useState('Eldritch Blast');
  const [ selectedMap, setSelectedMap ] = useState(0);
  const userTypeSelectHandler = (event) => {
    const selectedType = event.target.value;
    setUserType(selectedType);
  };

  const selectCharacterHandler = (event) => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  }

  const addCharacterHandler = (characterId, characterName) => {
    const newCharacterList = [...characterList, { id: characterId, name: characterName }];
    setCharacterList(newCharacterList);
  }
  
  const selectResourceHandler = (newResource) => {
    setSelectedResource(newResource);
  }

  const addResourceItem = (newResource) => {
    const newResourceList = [...resourceList, newResource];
    setResourceList(newResourceList);
  }

  const selectMapHandler = (event) => {
    const mapId = event.target.value;
    setSelectedMap(mapId);
  }

  const addMapItem = (newMap) => {
    const newMapList = [...mapList, newMap];
    setMapList(newMapList);
  }

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
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
        query={query}
        onQuery={handleQuery}
        onNewResource={addResourceItem}
        onNewMap={addMapItem}
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