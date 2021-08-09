import React from 'react';
import {Text, View} from 'react-native';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../libs/reactSize/scalingUtils';
function LineText(props) {
  const {title, lineColor, textColor} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          height: verticalScale(0.5),
          backgroundColor: lineColor,
        }}
      />
      <View>
        <Text
          style={{
            width: scale(50),
            textAlign: 'center',
            color: textColor,
            fontSize: moderateScale(10),
            height: verticalScale(25),
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          height: verticalScale(0.5),
          backgroundColor: lineColor,
        }}
      />
    </View>
  );
}
LineText.defaultProps = {
  title: 'Hello',
  lineColor: '#707070',
  textColor: '#555353',
};
export default LineText;
