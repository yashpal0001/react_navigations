import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen({navigation})
{
  return <View>
  <Text> This is My Home Screen Screen </Text>
  <Button onPress={()=>{navigation.navigate("Second")}}  title='Click Me'></Button>
  </View> 

}

function One()
{
  return <Text>This is First Tab Screen</Text>
}

function Two()
{
  return <Text>This is Second Tab Screen</Text>
}

function SecondScreen()
{
  return <Tab.Navigator>

    <Tab.Screen name="One" component={One}  ></Tab.Screen>
    <Tab.Screen name="Two" component={Two}></Tab.Screen>

  </Tab.Navigator>

}




export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" options={{headerShown:false}} component={SecondScreen} />
           
  </Stack.Navigator>
    </NavigationContainer>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
