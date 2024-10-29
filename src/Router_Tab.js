import React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from '.pages/Favorites';
import Products from '.pages/Products';



const Tab = createBottomTabNavigator();

function App() {
return <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="ProductsTab" component={Favorites} />
        <Tab.Screen name="FavoritesTab" component={Products} />
    </Tab.Navigator>
</NavigationContainer>
}

export default App;
