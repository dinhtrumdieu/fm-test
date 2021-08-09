import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../libs/reactSize/scalingUtils';
const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{flexDirection: 'row', alignItems: 'center'}}>Màn Scan</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    backgroundColor: '#efefef',
  },
});
export default ScanScreen;
