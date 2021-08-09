import 'react-native-gesture-handler';
import * as React from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import UserLock from '../../../../assets/images/login/user_lock.png';
const MenuItem = ({icon = ''}) => {
  return (
    <View style={styles.item}>
      <View style={styles.icon}>
        {icon}
        {/* <Image source={UserLock} /> */}
        {/* <OnlineShoping /> */}
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',

          fontSize: 14,
          width: 70,
        }}>
        Mua hàng Online
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    width: 70,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    textAlign: 'center',
    width: 35,
    height: 35,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MenuItem;
