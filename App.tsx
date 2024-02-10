import React,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyComponent from './src/Home';
import OrderedItems from './src/OrderedItems';
import CustomerDetails from './src/CustomerDetails';
import ListFoodItems from './src/ListFoodItems';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={MyComponent}/>
        <Stack.Screen name="OrderedItems" component={OrderedItems}/>
        <Stack.Screen name="CustomerDetails" component={CustomerDetails}/>
        <Stack.Screen name="ListFoodItems" component={ListFoodItems}/>
      </Stack.Navigator>
        
    </NavigationContainer>
  );
} 

export default App;