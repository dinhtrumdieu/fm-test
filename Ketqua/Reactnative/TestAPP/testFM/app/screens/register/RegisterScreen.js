import React, {Component, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImageBanner from '../../../assets/images/login/banner.jpg';
import FlagVN from '../../../assets/images/login/flag_vn.png';
import UserLock from '../../../assets/images/login/user_lock.png';
import BackIcon from '../../../assets/images/common/backIcon.jpg';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import LineText from '../../../app/component/LineText';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../libs/reactSize/scalingUtils';
const Register = ({navigation, route}) => {
  // const navigation = useNavigation();
  const handleBack = () => {
    console.log('handleBack');
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImageBanner}
        style={styles.image}
        resizeMode="cover">
        <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor="transparent"
        />
        <View style={styles.wrapper} animation="fadeInUpBig">
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            style={styles.scrollView}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View>
                <View style={{marginTop: verticalScale(9)}}>
                  <Text style={styles.title}>FM PLUS</Text>
                  <View style={styles.float}>
                    <Pressable onPress={handleBack}>
                      <View>
                        <Image style={styles.icon} source={BackIcon} />
                      </View>
                    </Pressable>
                  </View>
                </View>
                <View style={{marginBottom: verticalScale(3)}}>
                  <Text style={styles.introduce}>Đăng ký mới</Text>
                </View>
                {/* <View style={styles.float}>
                                    <Pressable
                                        onPress={() => navigation.goBack()}
                                    >
                                        <View>
                                            <BackIcon
                                                style={{ color: 'black' }}
                                            />
                                        </View>
                                    </Pressable>
                                </View> */}
                <View style={[styles.dCenter]}>
                  <View style={{flex: 4}}>
                    <View
                      style={[
                        // styles.dCenter,
                        styles.inputText,
                        {
                          marginTop: verticalScale(15),
                        },
                      ]}>
                      <Image style={styles.icon} source={FlagVN} />
                      <View
                        style={{
                          height: verticalScale(20),
                          width: scale(5),
                          marginRight: scale(10),
                          borderRightWidth: 1,
                          borderColor: '#A9A9A9',
                          paddingRight: scale(10),
                        }}
                      />
                      <TextInput
                        name="Username"
                        placeholder="Họ & Tên Đệm"
                        keyboardType="number-pad"
                        maxLength={10}
                      />
                    </View>
                  </View>
                  <View style={{width: scale(5)}} />
                  <View style={{flex: 2.7}}>
                    <View
                      style={[
                        // styles.dCenter,
                        styles.inputText,
                        {
                          width: '70%',
                          marginTop: verticalScale(15),
                        },
                      ]}>
                      <Image style={styles.icon} source={FlagVN} />
                      <View
                        style={{
                          height: verticalScale(20),
                          width: scale(5),
                          marginRight: scale(10),
                          borderRightWidth: scale(1),
                          borderColor: '#A9A9A9',
                          paddingRight: scale(10),
                        }}
                      />
                      <TextInput
                        name="Username"
                        placeholder="Tên"
                        keyboardType="number-pad"
                        maxLength={10}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    // styles.dCenter,
                    styles.inputText,
                    {
                      marginTop: verticalScale(15),
                      width: scale(320),
                    },
                  ]}>
                  <Image style={styles.icon} source={FlagVN} />
                  <View
                    style={{
                      height: verticalScale(20),
                      width: scale(5),
                      marginRight: scale(10),
                      borderRightWidth: 1,
                      borderColor: '#A9A9A9',
                      paddingRight: scale(10),
                    }}
                  />
                  <TextInput
                    name="Username"
                    placeholder="Nhập tên đăng nhập"
                    keyboardType="number-pad"
                    maxLength={10}
                  />
                </View>
                <View
                  style={[
                    // styles.dCenter,
                    styles.inputText,
                    {
                      marginTop: verticalScale(15),
                      width: scale(320),
                    },
                  ]}>
                  <Image style={styles.icon} source={FlagVN} />
                  <View
                    style={{
                      height: verticalScale(20),
                      width: scale(5),
                      marginRight: scale(10),
                      borderRightWidth: scale(1),
                      borderColor: '#A9A9A9',
                      paddingRight: scale(10),
                    }}
                  />
                  <TextInput
                    name="Username"
                    placeholder="Nhập số điện thoại"
                    keyboardType="number-pad"
                    maxLength={10}
                  />
                </View>
                <View
                  style={[
                    // styles.dCenter,
                    styles.inputText,
                    {
                      marginTop: verticalScale(15),
                      width: scale(320),
                    },
                  ]}>
                  <Image style={styles.icon} source={FlagVN} />
                  <View
                    style={{
                      height: verticalScale(20),
                      width: scale(5),
                      marginRight: scale(10),
                      borderRightWidth: scale(1),
                      borderColor: '#A9A9A9',
                      paddingRight: scale(10),
                    }}
                  />
                  <TextInput
                    name="Username"
                    placeholder="Nhập địa chỉ Email"
                    keyboardType="number-pad"
                    maxLength={10}
                  />
                </View>
                <View
                  style={[
                    // styles.dCenter,
                    styles.inputText,
                    {
                      marginTop: verticalScale(15),
                      width: scale(320),
                    },
                  ]}>
                  <Image style={styles.icon} source={FlagVN} />
                  <View
                    style={{
                      height: verticalScale(20),
                      width: scale(5),
                      marginRight: scale(10),
                      borderRightWidth: scale(1),
                      borderColor: '#A9A9A9',
                      paddingRight: scale(10),
                    }}
                  />
                  <TextInput
                    name="Username"
                    placeholder="Nhập mã PIN"
                    keyboardType="number-pad"
                    maxLength={10}
                  />
                </View>
                <View
                  style={[
                    styles.dCenter,
                    styles.inputText,
                    {
                      marginTop: verticalScale(15),
                      width: scale(320),
                    },
                  ]}>
                  <Image style={styles.icon} source={UserLock} />
                  <View
                    style={{
                      height: verticalScale(20),
                      width: scale(5),
                      marginRight: scale(10),
                      borderRightWidth: scale(1),
                      borderColor: '#A9A9A9',
                      paddingRight: scale(10),
                    }}
                  />
                  <TextInput
                    style={{textAlign: 'left'}}
                    name="Username"
                    placeholder="Xác nhận mã PIN"
                    keyboardType="number-pad"
                    maxLength={10}
                  />
                </View>
                <View style={[styles.dCenter, {marginTop: verticalScale(22)}]}>
                  <TouchableOpacity style={styles.loginTOuch}>
                    <Text style={styles.loginText}>Đăng Ký</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1}} />
                <View
                  style={{
                    paddingVertical: scale(25),
                    paddingHorizontal: scale(10),
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(10),
                      textAlign: 'center',
                      fontFamily: 'Roboto-Light',
                    }}>
                    Bằng việc chọn{' '}
                    <Text style={styles.loginTitle}>Đăng nhập</Text>, bạn xác
                    nhận đã đọc & đồng ý với các{' '}
                    <Text style={styles.termsOfUse}>điều khoản sử dụng</Text>{' '}
                    cùng{' '}
                    <Text style={styles.termsOfUse}>
                      chính sách bảo mật & chia sẻ thông tin
                    </Text>{' '}
                    {'của '}
                    <Text style={styles.loginTitle}>FM Plus</Text>.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopStartRadius: scale(30),
    borderTopEndRadius: scale(30),
    // paddingHorizontal: (25),
    backgroundColor: '#fff',
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: verticalScale(85),
  },
  introduce: {
    fontSize: moderateScale(16),
    color: '#EC1C24',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  title: {
    fontSize: moderateScale(32),
    color: '#f9ba09',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  float: {
    position: 'absolute',
    top: 0,
    left: 15,
    width: scale(31),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    zIndex: 1,
  },
  icon: {
    height: verticalScale(20),
    width: scale(20),
    resizeMode: 'cover',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: scale(10),
    paddingLeft: scale(10),
    marginLeft: scale(17),
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  loginTOuch: {
    width: scale(320),
    height: verticalScale(46),
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9',
    marginBottom: verticalScale(15),
  },
  loginText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Roboto-Regular',
  },
  forgotPassWord: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  registerTOuch: {
    backgroundColor: '#EC1C24',
    width: '90%',
    height: verticalScale(46),
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  language: {
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#7A7A7A',
  },
  termsOfUse: {
    color: '#0054FC',
    fontSize: moderateScale(12),
    fontFamily: 'Roboto-MediumItalic',
    textTransform: 'capitalize',
  },
});

export default Register;
