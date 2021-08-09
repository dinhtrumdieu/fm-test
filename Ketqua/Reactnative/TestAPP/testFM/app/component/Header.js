import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {scale} from '../libs/reactSize/scalingUtils';

//make a Component
const Header = props => {
  const {left, center, right, showStatusBar, headerStyle} = styles;
  console.log('statusBarHeight: ', StatusBar.currentHeight);
  return (
    <View style={styles.header}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={'dark-content'}
      />
      <View style={styles.center}>
        <Text numberOfLines={1}>{props.center}</Text>
      </View>
      <View style={styles.left}>{props.left}</View>
      <View style={styles.right}>{props.right}</View>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9CE54',
    height: scale(80),
    paddingTop: scale(20),
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(15),
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(15),
  },
  center: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scale(60),
    zIndex: 1,
  },
};

module.exports = Header;
