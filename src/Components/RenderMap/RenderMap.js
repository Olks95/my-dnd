import React from 'react';
import { GlassMagnifier } from "react-image-magnifiers";
import './RenderMap.css';

let mapStyle = {};

mapStyle = {
	border: "20px solid red",
	borderImage: "url(mapBorder.png) 38 round",
	marginTop: "20px",
	maxWidth: "90%"
}

const xOffset = -35;
const yOffset = -35;

let largeImageSrc = "";

const checkImage = src => {
	let img = new Image();
	img.onload = () => largeImageSrc = src;
	img.onerror = () => largeImageSrc = ""; // if image does not exist, set largeImageSrc to default value

	img.src = src; // starts loading of image
}

// const toggleBorder = () => {
// 	if()
// }

export const RenderMap = (props) => {
	largeImageSrc= ""; //Reset src to avoid 'magnifying' with the wrong large image
	checkImage(props.maps[props.selectedMap].src_large);
	return (
		<>
			<div className="img-magnifier-container" >
				<GlassMagnifier
					imageSrc={props.maps[props.selectedMap].src}
					largeImageSrc= {largeImageSrc}
					imageAlt={props.maps[props.selectedMap].alt} 
					style={mapStyle}
					magnifierOffsetX={xOffset}
					magnifierOffsetY={yOffset}
				/>
				<span><input type="checkbox" value="Border" /></span>
			</div>
		</>
	)
}
