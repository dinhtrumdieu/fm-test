import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './app/screens/login/LoginScreen';
import RegisterScreen from './app/screens/register/RegisterScreen';
import HomeScreen from './app/screens/home/HomeScreen';
import {store} from './app/redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Routes from './app/utils/Routes';
import ScanScreen from './app/screens/scan/ScanSceen';
import CustomTabBar from './app/component/CustomTabBar';
import HomeIcon from './assets/images/common/home.png';
import AccountIcon from './assets/images/common/account.png';
import WalletIcon from './assets/images/common/wallet.png';
import ScanIcon from './assets/images/common/scan.png';
import MailIcon from './assets/images/common/mail.png';
import MailScreen from './app/screens/mail/MailScreen';
import WalletScreen from './app/screens/wallet/WalletScreen';
import AccountScreen from './app/screens/account/AccountScreen';
import UserInformationScreen from './app/screens/account/UserInformationScreen';
import axios from 'axios';
import {API_KEY} from './app/component/Consts';
import AppConfig from './app/component/AppConfig';
import {v4 as uuidv4} from 'uuid';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      {/* screenOptions=
      {({route}) => ({
        tabBarIcon: ({color, height}) => {
          let icon;
          const I = <Image source={HomeIcon} />;
          const M = <Image source={WalletIcon} />;
          const K = <Image source={MailIcon} />;
          const N = <Image source={AccountIcon} />;
          // Set different 'icons' for each route
          if (route.name === 'HOME') {
            icon = I;
          } else if (route.name === 'WALLET') {
            icon = M;
          } else if (route.name === 'MAIL') {
            icon = K;
          } else if (route.name === 'LOGIN') {
            icon = N;
          }

          // You can return any component that you like here!
          return <Text style={{color: color, height: 40}}>{icon}</Text>;
        },
      })}
      tabBarOptions=
      {{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#f7f7f7',
          height: 50,
          borderTopWidth: 1,
        },
      }} */}

      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.WALLET} component={WalletScreen} />
      <Tab.Screen name={Routes.SCAN} component={UserInformationScreen} />
      <Tab.Screen headerMode="true" name={Routes.MAIL} component={MailScreen} />
      <Tab.Screen name={Routes.LOGIN} component={LoginScreen} />
    </Tab.Navigator>
  );
}
const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      {/* <Stack.Screen name="Main" component={MyTabs} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
        }}
      /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="UserInformation" component={UserInformationScreen} />
    </Stack.Navigator>
  );
};
axios.interceptors.request.use(
  async function (config) {
    config.headers['x-requestid'] = '593a8bfb-f53e-42ad-ae96-75e2ae803f1a';
    config.headers['x-apikey'] = API_KEY;
    config.headers['x-serial-number'] = AppConfig.SERIAL_NUMBER;
    config.headers['phone_ip'] = AppConfig.IP;
    config.headers.Authorization = `Bearer ${AppConfig.ACCESS_TOKEN}`;
    // Do something before request is sent
    return config;
  },
  function (error) {
    if (typeof window !== 'undefined') {
      // console.log("interceptors: ", error);
    }
    // Do something with request error
    return Promise.reject(error);
  },
);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
