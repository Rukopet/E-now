import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

import Button from "../../components/Button";
import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo, MutableRefObject, useRef, useState } from "react";
import { Marker, Circle } from "react-native-maps";

interface Props  {
 mapRef: MutableRefObject<MapView>
}

const Maps = () => {

  const mapRef = useRef() as MutableRefObject<MapView>;
  
  const [region, setRegion] = useState({
    latitude: 52.42684737018143,
    longitude: 10.789546598381433,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.1421
  });
  const Wolfsburg = {
    latitude: 52.42684737018143,
    longitude: 10.789546598381433,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.1421
  };
  const Markers = [{
    title: '1.21 Euro/KW',
    coordinates: {
      latitude: 52.42684737018143,
      longitude: 10.789546598381433,
      latitudeDelta: 0.1922,
      longitudeDelta: 0.1421
    },
  },
  {
    title: '1.8 Euro/KW Super charger',
    coordinates: {
      latitude: 52.42684737018143,
      longitude: 10.809546598381433,
      latitudeDelta: 0.1922,
      longitudeDelta: 0.1421
    }  
  },
  {
    title: '1.23 Euro/KW',
    coordinates: {
      latitude: 52.41684737018143,
      longitude: 10.729546598381433,
      latitudeDelta: 0.1922,
      longitudeDelta: 0.1421
    }  
  },
  {
    title: '1.5 Euro/KW ',
    coordinates: {
      latitude: 52.40684737018143,
      longitude: 10.859546598381433,
      latitudeDelta: 0.1922,
      longitudeDelta: 0.1421
    },  
  }]
  const getElect = (location: any) => {
    mapRef.current.animateToRegion(location, 3 * 1000);
  };
  const state = {
    LATLNG: {
      latitude: -35,
      longitude: 120
  },
  }
  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        //specify our coordinates.
        initialRegion={Wolfsburg}

        showsUserLocation = { true }
        onRegionChangeComplete={region => setRegion(region)}
        
      >
        <Circle
                key = { (Wolfsburg.longitude + Wolfsburg.longitude).toString() }
                center = { {latitude: 52.42684737018143,
                  longitude: 10.789546598381433, }}
                radius = { 5000 }
                strokeWidth = { 2 }
                strokeColor = { '#3399ff' }
                fillColor = { 'rgba(230,238,255,0.7)' }
                zIndex = {-1}
        />
        {Markers.map((marker) => {
           return <Marker key={marker.title}
           coordinate={marker.coordinates}
           title={marker.title}
           pinColor="green"
           >
              <Image
               source={require("../../assets/pin.png")}
               style={{width: 80, height: 86}}
               resizeMode="contain"
             />
           </Marker>
        })}
      </MapView>
      <Button mode="outlined"onPress={() => getElect(Wolfsburg)} >
      Go to Wolfsburg
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
    height: 50
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default memo(Maps);
