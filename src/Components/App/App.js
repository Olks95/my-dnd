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
      APIkey: 'QRryrEJEF27FDcPsZgWZZvhHhf5a3t',
      name: 'Harley Merlin'
    },
    {
      id: 'f7rZWpSiorNDNv5Qp',
      APIkey: 'QRryrEJEF27FDcPsZgWZZvhHhf5a3t',
      name: 'Shrek'
    },
    {
      id: 'xS8JoRmvpsnjm529p',
      APIkey: 'QRryrEJEF27FDcPsZgWZZvhHhf5a3t',
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
      src: '/my-dnd/WorldMap.jpg',
      src_large: '/my-dnd/WorldMap_large.jpg',
      alt: 'The world map of Miradonia',
      desc: 'Miradonia consists of two main continents. It is populated by a variety of races and monsters. '
    },
    {
      id: 1,
      name: 'Regional Map',
      src: '/my-dnd/RegionalMap.jpg',
      src_large: '/my-dnd/RegionalMap_large.jpg',
      alt: 'The region map of Mistwood',
      desc: 'The region of Mistwood holds the main travel route between the north and south. The Mist Woods themselves are the homeland for many wood elves, while the Knife Edge Mountains is the home to some smaller groups of Dwarves. Elesgate is the capital of the region, being a natural stop for any who travel north-south. The Silver River connects Elesgate to Martslock which functions as the main port. Work in progress...'
    }
  ]);
  const [ selectedCharacter, setSelectedCharacter ] = useState([{
      id: 'mLdzKAN7AAGt3qPP2',
      APIkey: 'QRryrEJEF27FDcPsZgWZZvhHhf5a3t',
      name: 'Harley Merlin'
    }]);
  const [ selectedResource, setSelectedResource ] = useState('Spells');
  const [ query, setQuery ] = useState('Eldritch Blast');
  const [ selectedMap, setSelectedMap ] = useState(0);
  const userTypeSelectHandler = (event) => {
    const selectedType = event.target.value;
    setUserType(selectedType);
  };

  const selectCharacterHandler = (event) => {
    let charIds = [];
    charIds = event.target.value.split(',');
    let newSelection = [];
    if(charIds.length > 1) {
      newSelection = characterList;
    } else {
      newSelection[0] = characterList.find(obj => obj.id === charIds[0]);
    }
    setSelectedCharacter(newSelection);
  }

  const addCharacterHandler = (characterUrl, apiKey, characterName) => {
    const characterId = characterUrl.match(/character\/\w*\//g)[0].split('/')[1];
    let newSelection = [];
    // console.log(characterId, apiKey, characterName);
    if(!characterList.some(obj => obj.id === characterId)) { //If characterId is unique, add create a new character
      const newCharacterList = [...characterList, { id: characterId, APIkey: apiKey, name: characterName }];
      setCharacterList(newCharacterList);
      newSelection[0] = newCharacterList.find(obj => obj.id === characterId);
      setSelectedCharacter(newSelection);
      // To update the dropdown to show the correct character after update.
      let element = document.getElementById('characterSelector');
      element.value = characterId;
    } else { //If characterId is not unique, inform the user that the character exists and under what name.
      let charName = characterList[characterList.findIndex(obj => obj.id === characterId)].name;
      console.log("Character already exists under the name: " + charName);
      window.alert("Character already exists under the name: " + charName);
    }
  }

  const removeCharacterHandler = (event) => {
    if(event.target.value === "REMOVE-ALL") {
      setCharacterList([]);
      setSelectedCharacter([]);
    } else {
      const newCharacterList = characterList.filter(obj => obj.name !== event.target.value);
      setCharacterList(newCharacterList);
      
      let updateSelectedCharacter = true;
      if(selectedCharacter.length > 1) {
        setSelectedCharacter(newCharacterList);
      } else {
        if(selectedCharacter) {
          updateSelectedCharacter = !newCharacterList.some(obj => obj.id === selectedCharacter.id);
        }
        if(updateSelectedCharacter && newCharacterList.length > 0) {
          const newSelectedCharacter = [newCharacterList[0]]
          setSelectedCharacter(newSelectedCharacter);
          console.log(newCharacterList);
        } else {
          setSelectedCharacter([]);
        }
      }
    }
  }
  
  const selectResourceHandler = (newResource) => {
    setSelectedResource(newResource);
  }

  const selectMapHandler = (event) => {
    const mapId = event.target.value;
    setSelectedMap(mapId);
  }

// Not implemented at this time... Would be similar to addCharacterHandler.
  // const addMapItem = (newMap) => {
  //   const newMapList = [...mapList, newMap]; //newMap should be an object.
  //   setMapList(newMapList);
  // }

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
  }

  const footer = (
    <div className="footer">
      <h5>Created by Ole Kristian Sævareid</h5> 
      <p>Project goal is to experiment with React & React Hooks and create something 
      useful for Dungeons & Dragons players and Dungeon Masters using Dicecloud.com</p>
    </div>
  )

  let content = (
    <React.Fragment>
      <WelcomeScreen userTypeSelect={userTypeSelectHandler} userType={userType} />
      {footer}
    </React.Fragment>
  );

  if(userType) {
    content = (
      <React.Fragment>
        <div className="main">
          <Playground 
          playgroundType={userType} 
          onReturn={userTypeSelectHandler} 
          onNewCharacter={addCharacterHandler}
          onRemoveCharacter={removeCharacterHandler}
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

          // onNewMap={addMapItem}
           />      
        </div>
        {footer}
      </React.Fragment>
  )};
  return content;
} 
export default App;