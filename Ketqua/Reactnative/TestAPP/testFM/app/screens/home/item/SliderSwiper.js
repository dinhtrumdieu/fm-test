import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Dimensions} from 'react-native';
import Slide1 from '../../../../assets/images/home/slide1.png';
import Slide2 from '../../../../assets/images/home/slide2.png';
import Slide3 from '../../../../assets/images/home/slide1.png';
import {scale, verticalScale} from '../../../libs/reactSize/scalingUtils';
const {width, height} = Dimensions.get('window');

export default class SliderSwiper extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Swiper
          dot={
            <View
              style={{
                backgroundColor: '#707070',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 5,
                marginBottom: -5,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#F9CE54',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 5,
                marginBottom: -5,
              }}
            />
          }
          paginationStyle={{
            bottom: -10,
            alignSelf: 'center',
          }}
          autoplay
          showsButtons={false}>
          <View style={styles.slide}>
            <Image style={styles.img} source={Slide1} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.img} source={Slide2} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.img} source={Slide3} />
          </View>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: verticalScale(180),
    width: '100%',
    paddingTop: scale(15),
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    // paddingLeft: 12,
    // paddingRight: 12,
    // borderRadius: 20,
    // elevation: 3,
    // display: 'flex',
  },
  img: {
    width: width,
    height: '100%',
    borderRadius: 10,
    display: 'flex',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
