import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhotoScreen from './src/screens/PhotoScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import PriceListScreen from './src/screens/PriceListScreen';
import LocationScreen from './src/screens/LocationScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import { DrawerContent } from './src/components/DrawerContent';
import StaffShowScreen from './src/screens/StaffShowScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// Stops warning alerts in dev mode
console.disableYellowBox = true;

// Load fonts
const getFonts = () => Font.loadAsync({
    'quicksand-semibold-600': require('./assets/fonts/Quicksand_600SemiBold.ttf'),
    'icomoon': require('./assets/theme/icomoon.ttf'),
});

const AboutUsStack = createStackNavigator();
const ContactUsStack = createStackNavigator();
const PhotoStack = createStackNavigator();
const PriceListStack = createStackNavigator();
const LocationStack = createStackNavigator();
const RewardsStack = createStackNavigator();
const StaffShowStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const AboutUsStackScreen = ({navigation}) => (

  <AboutUsStack.Navigator screenOptions={{
    headerStyle: {
    },
    headerTitleStyle: {
      fontSize: 23,
      fontFamily: 'quicksand-semibold-600',
    },
    }}>
    <AboutUsStack.Screen 
      name="ABOUT US" 
      component={AboutUsScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name="menu" style={{ marginLeft: 6 }} backgroundColor="transparent" underlayColor="transparent" color="darkgrey" size={35} onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
      }}
    />
  </AboutUsStack.Navigator>
);

const RewardsStackScreen = ({navigation}) => (

  <RewardsStack.Navigator screenOptions={{
    headerStyle: {
    },
    headerTitleStyle: {
      fontSize: 23,
      fontFamily: 'quicksand-semibold-600',
    },
    }}>
    <RewardsStack.Screen 
      name="REWARDS" 
      component={RewardsScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name="menu" style={{ marginLeft: 6 }} backgroundColor="transparent" underlayColor="transparent" color="darkgrey" size={35} onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
      }}
    />
  </RewardsStack.Navigator>
);

const PriceListStackScreen = ({navigation}) => (
  <PriceListStack.Navigator screenOptions={{
    headerStyle: {
    },
    headerTitleStyle: {
      fontSize: 23,
      fontFamily: 'quicksand-semibold-600'
    }
    }}>
    <PriceListStack.Screen 
      name="SERVICES" 
      component={PriceListScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name="menu" style={{ marginLeft: 6 }} backgroundColor="transparent" underlayColor="transparent" color="darkgrey" size={35} onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
      }}
    />
  </PriceListStack.Navigator>
);

const LocationStackScreen = ({navigation}) => (
  <LocationStack.Navigator screenOptions={{
    headerStyle: {
    },
    headerTitleStyle: {
      fontSize: 23,
      fontFamily: 'quicksand-semibold-600'
    }
    }}>
    <LocationStack.Screen 
      name="FIND US" 
      component={LocationScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name="menu" style={{ marginLeft: 6 }} backgroundColor="transparent" underlayColor="transparent" color="darkgrey" size={35} onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
      }}
    />
  </LocationStack.Navigator>
);

const ContactUsStackScreen = ({navigation}) => (
  <ContactUsStack.Navigator screenOptions={{
    headerStyle: {
    },
    headerTitleStyle: {
      fontSize: 23,
      fontFamily: 'quicksand-semibold-600'
    }
    }}>
    <ContactUsStack.Screen 
      name="CONTACT US" 
      component={ContactUsScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name="menu" style={{ marginLeft: 6 }} backgroundColor="transparent" underlayColor="transparent" color="darkgrey" size={35} onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
      }}
      />
  </ContactUsStack.Navigator>
);

const PhotoStackScreen = ({navigation}) => (
  <PhotoStack.Navigator screenOptions={{
    headerStyle: {
    },
    headerTitleStyle: {
      fontSize: 23,
      fontFamily: 'quicksand-semibold-600'
    }
    }}>
    <PhotoStack.Screen 
      name="GALLERY" 
      component={PhotoScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name="menu" style={{ marginLeft: 6 }} backgroundColor="transparent" underlayColor="transparent" color="darkgrey" size={35} onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
      }}
    />
  </PhotoStack.Navigator>
);

const StaffShowStackScreen = ({navigation}) => (
  <StaffShowStack.Navigator screenOptions={{
    headerStyle: {
    },
    headerTitleStyle: {
      fontSize: 23,
      fontFamily: 'quicksand-semibold-600'
    }
    }}>
    <StaffShowStack.Screen 
      name="MEET US" 
      component={StaffShowScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name="menu" style={{ marginLeft: 6 }} backgroundColor="transparent" underlayColor="transparent" color="darkgrey" size={35} onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
      }}
    />
  </StaffShowStack.Navigator>
);

function App() {

  const[fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent { ... props} />}>
        <Drawer.Screen name="Photo" component={PhotoStackScreen} options={{ title: 'Photos' }} />
        <Drawer.Screen name="Contact" component={ContactUsStackScreen} options={{ title: 'Contact Us' }} />
        <Drawer.Screen name="About" component={AboutUsStackScreen} options={{ title: 'About Us' }} />
        <Drawer.Screen name="Price" component={PriceListStackScreen} options={{ title: 'Price List' }} />
        <Drawer.Screen name="Location" component={LocationStackScreen} options={{ title: 'Location' }} />
        <Drawer.Screen name="Rewards" component={RewardsStackScreen} options={{ title: 'Rewards' }} />
        <Drawer.Screen name="StaffShow" component={StaffShowScreen} options={{ title: 'Staff Show' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} else {
  return (
  <AppLoading
      startAsync={getFonts}
      onFinish={ () => setFontsLoaded(true)}
  />
  )
}};

export default App;
