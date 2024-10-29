import React from 'react';
import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerabNavigator } from '@react-navigation/bottom-Drawer';

import Favorites from '.pages/Favorites';
import Products from '.pages/Products';


const Drawer = createBottomTabNavigator();

function App() {
return <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="ProductsDrawer" component={Favorites} />
        <Drawer.Screen name="FavoritesDrawer" component={Products} />
    </Drawer.Navigator>
</NavigationContainer>
}

export default App;
