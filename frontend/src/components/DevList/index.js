import React from 'react';
import DevItem from '../DevItem';

function DevList({ devs }){
    return (
    <ul>
    { 
      devs.map(dev => (
        <DevItem key={dev._id}  dev={dev}/>
      ))
    }
    </ul>
    );
}

export default DevList;