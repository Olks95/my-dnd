import React from 'react';
// import { useQueryHandler } from '../../Hooks/useQueryHandler';

export const RenderSpellbook = props => {
	// const [ not sure yet ] = useQueryHandler[props.selectedResource, props.data]
	let render = null;
	let spellExtra = null;
	let spellLevel = null;
	if (props.data.higher_level) {
		spellExtra = (
			<div className="spellMoreText" >
				<h1>Higher Levels</h1>
				<hr/>
				<p>{props.data.higher_level}</p>
			</div>
		)
	} else {
		spellExtra = <hr/>
	}
	if (props.data.level <= 0) {
		spellLevel = "Cantrip"
	} else if (props.data.level === 1) spellLevel = "1st level";
	else if (props.data.level === 2) spellLevel = "2nd level";
	else if (props.data.level === 3) spellLevel = "3rd level";
		else spellLevel = props.data.level + "th level";
	if(props.data.index && props.selectedResource === "Spells") {
		render = (
			<React.Fragment>
				<h1>Here is the {props.selectedResource} you searched for:</h1>
				<div className="cardHolder">
					<div className="queryCard">
						<h1 className="spellName">{props.data.name}</h1>
						<p className="spellUnderTitle">{props.data.school.name} {spellLevel}</p>
						<div className="spellStats" >
							<p>
								<b>Casting Time:</b> {props.data.casting_time}
							</p>
							<p>
								<b>Range:</b> {props.data.range}
							</p>
							<p>
								<b>Components:</b> {props.data.components.join(', ')}
							</p>
							<p>
								<b>Duration:</b> {props.data.duration}
							</p>
							<p>
								<b>Classes:</b> {props.data.classes.map(element => element.name).join(', ')}
							</p>
						</div>
						<div className="spellText" >
							{props.data.desc.map(paragraph => <p key={props.data.desc.indexOf(paragraph)}>{paragraph.replace("â€™", "'")}</p>)}
						</div>
						{spellExtra}
					</div> 
				</div>
			</React.Fragment>
		)
	} else if(props.selectedResource !== "Spells") {
		render =  (
			<h1>Feature not fully developed yet. Please use "Spells".</h1>
		)
	} else render = <p>Please search for spells using spell name. Examples coming in later version.</p>
	return render;
}
