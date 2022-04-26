import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';

export default Fetcher = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const mm= {home_size: 1500.0,
  lot_size: 2000.0,
  beds: 2,
  baths: 4.0,
  latitude: 37.521972,
  longitude: -122.294079,
  city: "Belmont"}
  const predictionURL='https://machine-learning-mobile-app.herokuapp.com/prediction';
  const predict = async () => {
     try {
      const response = await fetch(predictionURL , {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(mm)   
      });
      const json = await response.json();
       setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
const reSet= ()=>{setA(!A);
  setData({message:"", prediction:0});}
//  useEffect(() => {
//     predict();
//     return ()=>{}
//   }, [data]);
const [A, setA]=useState(1)
  return (
   <View>
 <Text>Press Here</Text>
 { A ? <Text>{data.prediction}</Text> : null }
 <Button title='Sasa' onPress={()=>{reSet()}}/>
 <Button title='Sasa' onPress={()=>{predict()}}/>
 <Button title='Sasa' onPress={()=>{}}/>
    </View>
  );
};
//props.navigation.navigate('Main')