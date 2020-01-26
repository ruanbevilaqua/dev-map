import React, { Component, useState } from 'react';
import {Map, InfoWindow, GoogleApiWrapper, Marker} from 'google-maps-react';
import DevMarker from '../DevMarker'; //  

const mapStyles = {
  width: '850px',
  height: '530px',
};



export class MapContainer extends Component {
  lista_devs = [];

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    devInfo: {},
  };
  
  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      devInfo: props.devInfo,
    });
  
  // onMapClicked = (props) => {
    // console.log(props);
    // if (this.state.showingInfoWindow) {
    //   this.setState({
    //     showingInfoWindow: false,
    //     activeMarker: null
    //   })
    // }
  // };

  render() {
    return (
        <Map 
          google={this.props.google}
          className={'mainMap'}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: -27.5998783, lng: -48.5487700}}
          // onClick={this.onMapClicked}>
        >
          { 
            this.props.devs.map(dev => {
              return (
                // <DevMarker
                //   dev={dev} 
                //   callbackParent={(props, marker) => this.onMarkerClick()}
                // />
                <Marker 
                  key={dev._id}
                  name={dev.name}
                  devInfo={dev}
                  position={{ 
                    lat: dev.location.coordinates[1], 
                    lng: dev.location.coordinates[0]
                  }}
                  icon={{
                    url: dev.avatar_url,
                    anchor: {x: 32, y: 32},
                    scaledSize: {width: 32, height: 32}
                  }}
                  onClick={this.onMarkerClick}
                />
              )
            })
          }
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div  style={{width: '300px'}}>
                <h1>{this.state.selectedPlace.name}</h1>
                <hr />
                <h4 style={{marginTop: '10px'}}>{this.state.devInfo.bio}</h4>
                <h4 style={{marginTop: '10px'}}><a target="_blank" href={`https://github.com/${this.state.devInfo.github_username}`}>Github</a></h4>
              </div>
          </InfoWindow>
              
        </Map>
    );
  }
}

MapContainer = GoogleApiWrapper({
  apiKey: ('AIzaSyCZGtwwctuQozXEAna8IYdC-X9Y3XF_Oow')
})(MapContainer)