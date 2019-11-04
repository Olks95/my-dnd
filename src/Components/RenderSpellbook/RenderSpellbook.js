import React from 'react';
// import { useQueryHandler } from '../../Hooks/useQueryHandler';
import './RenderSpellbook.css';

export const RenderSpellbook = props => {
	// const [ not sure yet ] = useQueryHandler[props.selectedResource, props.data]
	let render = null;
	let spellExtra = null;
	let spellLevel = null;
	if (props.data.higher_level) {
		spellExtra = (
			<div className="higher-level" >
				<h1>Higher Levels</h1>
				<hr/>
				{props.data.higher_level.map(paragraph => <p className="spell-text" key={props.data.desc.indexOf(paragraph)}>{paragraph.replace(/â€™/gi, "'")}</p>)}
			</div>
		)
	} else {
		spellExtra = null;
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
				<div className="spell-card-holder">
					<div className="spell-card">
						<h1 className="spell-name">{props.data.name}</h1>
						<p className="spell-school">{props.data.school.name}   {spellLevel}</p>
						<div className="spell-stats" >
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
						<div className="spell-text" >
							{props.data.desc.map(paragraph => <p key={props.data.desc.indexOf(paragraph)}>{paragraph.replace(/â€™/gi, "'")}</p>)}
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