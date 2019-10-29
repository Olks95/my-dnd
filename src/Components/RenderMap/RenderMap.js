import React from 'react';
import { GlassMagnifier } from "react-image-magnifiers";

const mapStyle = {
	border: "35px solid red",
	borderImage: "url(mapBorder.png) 38 round",
	margin: "20px",
	maxWidth: "90%"
}

const xOffset = -35;
const yOffset = -35;

export const RenderMap = (props) => {
	return (
		<>
			<h1>This is the {props.maps[props.selectedMap].name} </h1>
			<div className="img-magnifier-container" >
				<GlassMagnifier
					imageSrc={props.maps[props.selectedMap].src}
					largeImageSrc= {props.maps[props.selectedMap].src_large}
					imageAlt={props.maps[props.selectedMap].alt} 
					style={mapStyle}
					magnifierOffsetX={xOffset}
					magnifierOffsetY={yOffset}
				/>
			</div>
		</>
	)
}
