import {createStackNavigator} from 'react-navigation';
import Map from './Map';
import Fetcher from './Fetcher';


const Routes= createStackNavigator( {
Map: {screen: Map},
Fetcher : {screen: Fetcher}, 
} ,
{headerMode: 'none'}

);

export default Routes;