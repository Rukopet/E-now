import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

import Button from "../../components/Button";
import { StyleSheet, Text, View } from "react-native";
import React, { memo, MutableRefObject, useRef, useState } from "react";
import { Marker, Circle } from "react-native-maps";

interface Props  {
 mapRef: MutableRefObject<MapView>
}

const Maps = () => {

  const mapRef = useRef() as MutableRefObject<MapView>;
  
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
  const Wolfsburg = {
    latitude: 52.42684737018143,
    longitude: 10.789546598381433,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.1421
  };
  const Weyhouse = {
    latitude: 52.42684737018143,
    longitude: 10.789546598381433,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.1421
  };
  const getElect = () => {
    mapRef.current.animateToRegion(Weyhouse, 3 * 1000);
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
                fillColor = { 'rgba(230,238,255,0.6)' }
                zIndex = {-1}
        />
        <Marker
          coordinate={Wolfsburg}
          pinColor="green"
          image={require("../../assets/pin.png")}
        />
        <Marker
          coordinate={Weyhouse}
          pinColor="blue"
          image={require("../../assets/pin.png")}
        />
      </MapView>
      <Button mode="outlined"onPress={() => getElect()} >
      Find Electricity
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
