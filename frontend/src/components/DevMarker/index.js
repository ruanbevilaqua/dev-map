import React, { Component } from 'react';
import { Marker } from 'google-maps-react';

// Algum problema faz isso não aparecer no mapa.

const DevMarker = (props) => {
    // Props receberá dev e callbackParent
    return (    
    <Marker 
        key={props.dev._id}
        name={props.dev.name}
        devInfo={props.dev}
        position={{ 
            lat: props.dev.location.coordinates[1], 
            lng: props.dev.location.coordinates[0]
        }}
        icon={{
            url: props.dev.avatar_url,
            anchor: {x: 32, y: 32},
            scaledSize: {width: 32, height: 32}
        }}
        onClick={props.callbackParent(props, this)}
    />
    );
}

export default DevMarker;