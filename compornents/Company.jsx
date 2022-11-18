import React from 'react'
import { CompanyData } from './CompanyData'; 
import { GoogleMap, useLoadScript ,MarkerF} from "@react-google-maps/api";
import { useMemo } from "react";

export default function Campany() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: {API_KEY},
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const Map = () => {

  const center = useMemo(() => ({ lat: 35.665140, lng: 139.761000 }), []);
   
  return (
    <div className='company'>
      <div className="mv">
        <div className="overlay"></div>
        <h2>会社概要</h2>
      </div>
      <div className="contents">
        <div className="abouts">
          {CompanyData.map((value ,key) => {
            return(
              <div className="wapper" key={key}>
                <div className="about-list">
                  <p>{value.list}</p>
                </div>
                <div className="about">
                  <p>{value.about}</p>
                </div>
              </div>
            )
          })}
        </div>

          <div className="googlemap">
          <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
          <MarkerF position={center} />
          </GoogleMap>
          </div>
          
      </div>
    </div>
  )
}

