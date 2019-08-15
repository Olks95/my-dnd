import React from 'react';
import './Playground.css'

const Playground = (props) => {
	return(
		<React.Fragment>
	        <h1>You are a {props.playgroundType}!</h1>
	        <div className="container">
	        	<div className="flex-item">
		        	First Element
	        	</div>
	        	<div className="flex-item">
	        		Second Element
	        	</div>
	        	<div className="flex-item">
	        		Third Element
	        	</div>
	        </div>
	        <button onClick={props.returnHandler} value='' >Return</button>
		</React.Fragment>
	)
}

export default Playground;