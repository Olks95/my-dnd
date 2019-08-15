import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = (props) => {
	return(
		<React.Fragment >
		  <div className="WelcomeScreen-header">
		    <h1>This will be Legendary!</h1>
		    <h2>Now choose honestly</h2>
		    <ul className="UserType-list">
		      <li><button onClick={props.userTypeSelect} value="DM" >I AM THE ALMIGHTY DUNGEON MASTER!</button></li>
		      <li><button onClick={props.userTypeSelect} value="player" >I am but a humble adventurer</button></li>
		    </ul>
		  </div>
		</React.Fragment>
	)
}

export default WelcomeScreen;