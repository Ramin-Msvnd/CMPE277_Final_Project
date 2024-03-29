import React,{useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
// import GlobalStyle from '../utils/GlobalStyle';
import MapView, {Marker} from 'react-native-maps';

function Map(props) {
const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        //onRegionChangeComplete runs when the user stops dragging MapView
        onRegionChangeComplete={(region) => setRegion(region)}
      />
      {/*Display user's current region:*/}
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    <Button title='Set Coordinate' onPress={()=> props.navigation.navigate('Fetcher', {longitude: region.longitude, latitude:region.latitude}) }></Button>
    </View>
  );
    }


  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  export default Map;