import 'react-native-gesture-handler';
import * as React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Fonts from '../utils/commonStyle';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../app/screens/login/LoginScreen';
import RegisterScreen from '../../app/screens/register/RegisterScreen';
import HomeScreen from '../../app/screens/home/HomeScreen';
import AccountIcon from '../../assets/svg/bottomtab/ic_account.svg';
import AccountActiveIcon from '../../assets/svg/bottomtab/ic_account_active.svg';
import HomeIcon from '../../assets/svg/bottomtab/ic_home.svg';
import HomeActiveIcon from '../../assets/svg/bottomtab/ic_home_active.svg';
import MailIcon from '../../assets/svg/bottomtab/ic_mail.svg';
import MailActiveIcon from '../../assets/svg/bottomtab/ic_mail_active.svg';
import ScanIcon from '../../assets/svg/bottomtab/ic_scan.svg';
import ScanActiveIcon from '../../assets/svg/bottomtab/ic_scan_active.svg';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../libs/reactSize/scalingUtils';
import WalletIcon from '../../assets/svg/bottomtab/ic_wallet.svg';
import WalletActiveIcon from '../../assets/svg/bottomtab/ic_wallet_active.svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {styles} from 'ansi-colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function CustomTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View
      style={{
        paddingTop: scale(5),
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: scale(12),
        borderTopLeftRadius: scale(12),
        shadowColor: '#b1b1b1',
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 0,
          height: -3,
        },
        elevation: 3,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            key={index}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* {isFocused ? (
                <ScanActiveIcon width={27} height={27} />
              ) : (
                <ScanIcon width={27} height={27} />
              )} */}
            {index === 0 && (
              <View>
                {isFocused ? (
                  <HomeActiveIcon width={27} height={27} />
                ) : (
                  <HomeIcon width={27} height={27} />
                )}
                <Text
                  style={{
                    color: isFocused ? 'red' : '#222',
                    fontSize: moderateScale(8),
                    ...Fonts.defaultLight,
                  }}>
                  {label}
                </Text>
              </View>
            )}
            {index === 1 && (
              <View>
                {isFocused ? (
                  <WalletActiveIcon width={27} height={27} />
                ) : (
                  <WalletIcon width={27} height={27} />
                )}
                <Text
                  style={{
                    color: isFocused ? 'red' : '#222',
                    fontSize: moderateScale(8),
                    ...Fonts.defaultLight,
                  }}>
                  {label}
                </Text>
              </View>
            )}
            {index === 2 && (
              <View>
                {isFocused ? (
                  <ScanActiveIcon width={27} height={27} />
                ) : (
                  <ScanIcon width={27} height={27} />
                )}
              </View>
            )}
            {index === 3 && (
              <View>
                {isFocused ? (
                  <MailActiveIcon width={27} height={27} />
                ) : (
                  <MailIcon width={27} height={27} />
                )}
                <Text
                  style={{
                    color: isFocused ? 'red' : '#222',
                    fontSize: moderateScale(8),
                    ...Fonts.defaultLight,
                  }}>
                  {label}
                </Text>
              </View>
            )}
            {index === 4 && (
              <View>
                {isFocused ? (
                  <AccountActiveIcon width={27} height={27} />
                ) : (
                  <AccountIcon width={27} height={27} />
                )}
                <Text
                  style={{
                    color: isFocused ? 'red' : '#222',
                    fontSize: moderateScale(8),
                    ...Fonts.defaultLight,
                  }}>
                  {label}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(8),
    ...Fonts.defaultLight,
  },
});
export default CustomTabBar;
