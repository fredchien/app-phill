import React from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './pages/Login';
import Home from './pages/Home';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const verifyActive = (color: string) => {
  return color === '#0C1C2766' ? '#0C1C2766' : '#00095e';
}

export default function Routes() {
  function TabsSchema({ navigation }) {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: '#0C1C27', inactiveTintColor: '#0C1C2766', style: { backgroundColor: '#ffffff',elevation: 0,
        shadowColor: "#444",
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        }, borderWidth: 0 } }}>
            <Tab.Screen name="Home" component={Home} options={({ route }) =>
              ({
                title: '',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <View style={styles.tabView}>
                    <View>
                    <Icon name="home" size={25} color={verifyActive(color)} style={{position: 'relative'}}/>
                    </View>
                    <Text style={[styles.tabText, {color: verifyActive(color)}]}>Home</Text>
                  </View>
                )
              })}/>
              <Tab.Screen name="Favorites" component={Home} options={({ route }) =>
              ({
                title: '',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <View style={styles.tabView}>
                    <View>
                    <Icon name="favorite" size={25} color={verifyActive(color)} style={{position: 'relative'}}/>
                    </View>
                    <Text style={[styles.tabText, {color: verifyActive(color)}]}>Favorites</Text>
                  </View>
                )
              })}/>
              <Tab.Screen name="Relax" component={Home} options={({ route }) =>
              ({
                title: '',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <View style={styles.tabView}>
                    <View>
                    <Icon name="spa" size={25} color={verifyActive(color)} style={{position: 'relative'}}/>
                    </View>
                    <Text style={[styles.tabText, {color: verifyActive(color)}]}>Relax</Text>
                  </View>
                )
              })}/>
              <Tab.Screen name="Meditate" component={Home} options={({ route }) =>
              ({
                title: '',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <View style={styles.tabView}>
                    <View>
                    <Icon name="self-improvement" size={25} color={verifyActive(color)} style={{position: 'relative'}}/>
                    </View>
                    <Text style={[styles.tabText, {color: verifyActive(color)}]}>Meditate</Text>
                  </View>
                )
              })}/>
        </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={TabsSchema} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  tabView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold'
  }
}