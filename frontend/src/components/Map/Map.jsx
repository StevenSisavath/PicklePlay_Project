import React, { useState, useEffect, useMemo } from 'react';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import "./Map.css";
import { GoogleAPIKey } from '../../utils/APIKeys';
import usePlacesAutocomplete, {
    getGeocode, 
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function Map(props) {
    const [lat,setLat] = useState([])
    const [lon,setLon] = useState([])

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
        })
    })

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: GoogleAPIKey,
        libraries: ["places"],
    });

    if (!isLoaded) return <div>loading...</div>;

    
    

    function GoogleMaps(){
        const center = useMemo(() => ({lat: lat, lng: lon}), [])
        const [selected, setSelected] = useState(null);
        

        return (
        <>
            {/* <div>
                <PlacesAutocomplete setSelected={setSelected}/>
            </div> */}

            <GoogleMap 
                zoom={10} 
                center={center} 
                mapContainerClassName="map-container"
            >
                <Marker position={{lat: lat, lng: lon}}/>
                <Marker position={{lat: 29.680190, lng: -95.468800}}/>
                <Marker position={{lat: 29.824550, lng: -95.615510}}/>
                <Marker position={{lat: 29.733760, lng: -95.765560}}/>
                <Marker position={{lat: 29.900130, lng: -95.704720}}/>
                <Marker position={{lat: 29.701298, lng: -95.440367}}/>
                <Marker position={{lat: 29.983107, lng: -95.57149}}/>
                <Marker position={{lat: 30.058289, lng: -95.437805}}/>
                <Marker position={{lat: 29.966669, lng: -95.70513}}/>
                <Marker position={{lat: 29.716868, lng: -95.382019}}/>
                <Marker position={{lat: 29.444876, lng: -95.236882}}/>
                <Marker position={{lat: 29.806213, lng: -95.176071}}/>
                {/* {selected && <Marker position={{lat: , lng:}}/>} */}
            </GoogleMap>
        </>
    )};

    // const handleSelect = async(address) => {
    //     setValue(address, false);
    //     clearSuggestions();

    //     const result = await getGeocode({ address });
    //     const {lat, lng} = await getLatLng(results[0]);
    //     setSelected({ lat, lng });

    // }

    // const PlacesAutocomplete = ({ setSelected }) => {
    //     const {
    //         ready,
    //         value,
    //         setValue,
    //         suggestions: { status, data },
    //         clearSuggestions
    //     } = usePlacesAutocomplete();

    //     return (
    //         <Combobox onSelect={handleSelect} >
    //             <ComboboxInput value={value} 
    //             onChange={(e) => setValue(e.target.value)} 
    //             disabled={!ready}
    //             className="combobox-input" 
    //             placeholder='Seach an Address'
    //             />
    //             <ComboboxPopover>
    //                 <ComboboxList>
    //                     {status === 'OK' && 
    //                         data.map(({ place_id, description }) => (
    //                             <ComboboxOption key={place_id} value = {description}/> 
    //                             ))}
    //                 </ComboboxList>
    //             </ComboboxPopover>
    //         </Combobox>
    //     );
    // };
    

    return ( 
        <GoogleMaps/>   
     );
}
