import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Context from "./src/script/context";
import { Menu, Game, Settings, Explanation } from "./src/pages/index";



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Menu" screenOptions={() => ({tabBarStyle: {display: 'none'}})}>
          <Tab.Screen name="Menu" component={Menu} options={{headerShown: false}} />
          <Tab.Screen name="Game" component={Game} options={{headerShown: false}} />
          <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}} />
          <Tab.Screen name="Explanation" component={Explanation} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context>
  );
}