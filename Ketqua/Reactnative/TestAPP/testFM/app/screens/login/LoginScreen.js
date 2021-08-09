import React, {Component, useRef, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
// import {login} from '../../redux/login/actions';
import {actionLogin} from '../../redux/login/loginAction';
import {useNavigation} from '@react-navigation/native';
import ImageBanner from '../../../assets/images/login/banner.jpg';
import FlagVN from '../../../assets/images/login/flag_vn.png';
import UserLock from '../../../assets/images/login/user_lock.png';
import BackIcon from '../../../assets/images/common/backIcon.jpg';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../libs/reactSize/scalingUtils';
import Fonts from '../../utils/commonStyle';
import ConfirmGoogleCaptcha from 'react-native-google-recaptcha-v2';
import {AsyncStorage, Dimensions} from 'react-native';
import LineText from '../../../app/component/LineText';
import * as Validator from '../../component/Validator';
import AppConfig from '../../component/AppConfig';
const {width, height} = Dimensions.get('window');
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
import axios from 'axios';
import Utils from '../../utils/Utils';
import {BASE_API_URL} from '../../component/Consts';
const url = BASE_API_URL;
const LoginScreen = ({props}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleBack = () => {
    console.log('handleBack');
    navigation.goBack();
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    username: '',
    password: '',
  });
  const captchaForm = useRef(null);
  const openCaptcha = () => {
    if (captchaForm?.current) {
      captchaForm?.current?.show();
    }
  };

  const onMessage = event => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        captchaForm?.current?.hide();
      } else {
        captchaForm?.current?.hide();
        console.log('event.nativeEvent.data', event.nativeEvent.data);
        callApiLogin(event.nativeEvent.data);
      }
    }
  };

  const callApiLogin = async catpchaToken => {
    console.log('aaaa');
    const res = await axios({
      url: `http://fmplusdev.xyz/api/1.0/auth/login`,
      method: 'POST',
      header: {
        'x-requestid': '593a8bfb-f53e-42ad-ae96-75e2ae803f1a',
        'x-apikey': 'PnVdWXApSHQlUiJDey14aFU4TVVROT1aP0tAOVhwSGE',
        'x-serial-number': AppConfig.SERIAL_NUMBER,
      },
      data: {
        Username: '0777216208',
        Password: '21c096a343d4f4f88b3c021b02057fdf',
        LatOfMap: '',
        LongOfMap: '',
        Browser: 'samsung SM-G975N',
        PlayerId: 'b8acaccb-f21f-4f36-b723-344738de8b15',
        Serial: '3fac8eb404f9b9fe',
        CaptchaToken:
          '03AGdBq27-jqVOpT0nKiGVEb2Up73JtY7Pa8FXqNguhyG6w4tm8GmS9Nv7Rx-GzhTILLXxY2_ihFfYaPnjYEKG1QNDnhLKvgYepvcGtSOdH0YqY1xQHzsAuv9ZD69qjJSQ_LsZ-lIiYZiRzyhxXWLzb9bhMLmwpLpqFb_bpxCeouafqcOfKPBxKyA-rAlUQpCLDw2M295lPiLAFKBUjNJwKLVXNpTh41VzR2vQTOS1jaehKyJaKTSqld8wkF0VvUSk97SDZe783EVDx8Mi087uNNk2tVB_337sINYXGqH0IhJ-CV9w20ypPUsy1An07TLN4PbUs_tPfUBoYP059e95VRPQkCvy5a1LhT53gqxgHHHk4QEBut8EwY4HOSE-_siaw-3Rgif-CQRtKB7p5KPxUD7LMURl5lN7NtSd5B_1JHUESoeumDj8l7vZBQafYF4KBCJGcjZCYrhj55WNUEPxKTY6N3B-gbL8Dg',
        // Username: username,
        // Password: Utils.MD5(password),
        // LatOfMap: Utils.getLocation()[0],
        // LongOfMap: Utils.getLocation()[1],
        // Browser: AppConfig.BROWER,
        // PlayerId: AppConfig.PLAYER_ID,
        // Serial: AppConfig.SERIAL_NUMBER,
        // CaptchaToken: catpchaToken,
      },
    }).then(res => res);
    if (res.data.Code === 200) {
      if (res?.data?.Data?.Token && res?.data?.Data.RefreshToken) {
        console.log('Token', res?.data?.Data?.Token);
        axios.defaults.headers.common = {
          Authorization: `Bearer ${res?.data?.Data?.Token}`,
        };

        getUserInformation();
      }
    }
  };
  const getUserInformation = async () => {
    return await axios({
      method: 'GET',
      header: {
        'x-requestid': '593a8bfb-f53e-42ad-ae96-75e2ae803f1a',
        'x-apikey': 'PnVdWXApSHQlUiJDey14aFU4TVVROT1aP0tAOVhwSGE',
      },
      url: `http://fmplusdev.xyz/api/1.0/auth/user/profile`,
    }).then(res => console.log('USer info', res.data));
  };
  // const handleSubmit = (catpchaToken = '') => {
  //   // console.log(`handleLoginAction: ${JSON.stringify(this.state)}`);
  //   // # Chúng ta gọi action Login khi mà user click vào button login
  //   if (Object.values(errorMessage).every(el => el === undefined)) {
  //     if (captchaForm?.current) {
  //       captchaForm?.current?.show();
  //     }
  //   } else {
  //     console.log('Loi');
  //   }
  // };
  const handleUsername = (text, e) => {
    console.log(`text: ${text}`);
    const error =
      Validator.required(text) ||
      Validator.maxLength10(text) ||
      Validator.phone(text);
    setErrorMessage({...errorMessage, username: error});
    console.log(error);
    setUsername({
      username: text,
    });
  };
  const handlePassword = (text, e) => {
    const error =
      Validator.required(text) ||
      Validator.maxLength8(text) ||
      Validator.checkPIN(text) ||
      Validator.checkPinSpecial(text);
    setErrorMessage({...errorMessage, password: error});
    console.log(error);
    setPassword({
      password: text,
    });
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
        <ConfirmGoogleCaptcha
          ref={captchaForm}
          siteKey={AppConfig.CAPTCHA_SITE_KEY}
          baseUrl={AppConfig.CAPTCHA_BASE_URL}
          languageCode="vi"
          onMessage={onMessage}
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
                <View style={{marginTop: verticalScale(11)}}>
                  <Text style={styles.introduce}>Chào mừng bạn đến với</Text>
                  {/* <BackIcon /> */}
                </View>
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
                <View style={styles.dCenter}>
                  <View
                    style={[
                      styles.inputText,
                      {
                        marginTop: verticalScale(34),
                        // width: scale(320),
                      },
                    ]}>
                    <Image style={styles.icon} source={FlagVN} />
                    <View
                      style={{
                        height: verticalScale(20),
                        width: scale(20),
                        marginRight: scale(10),
                        borderRightWidth: 1,
                        borderColor: '#A9A9A9',
                      }}
                    />
                    <TextInput
                      name="Username"
                      placeholder="Nhập số điện thoại"
                      keyboardType="number-pad"
                      maxLength={10}
                      value={username}
                      onChangeText={handleUsername}
                      // validate={[
                      //   Validator.required,
                      //   Validator.maxLength10,
                      //   Validator.phone,
                      // ]}
                    />
                    <Text>{errorMessage.username}</Text>
                  </View>
                </View>
                <View style={styles.dCenter}>
                  <View
                    style={[
                      styles.inputText,
                      {
                        marginTop: verticalScale(15),
                        // width: width,
                        // width: scale(320),
                      },
                    ]}>
                    <Image style={styles.icon} source={UserLock} />
                    <View
                      style={{
                        height: verticalScale(20),
                        width: scale(20),
                        marginRight: scale(10),
                        borderRightWidth: 1,
                        borderColor: '#A9A9A9',
                      }}
                    />
                    <TextInput
                      style={{textAlign: 'left'}}
                      name="Username"
                      placeholder="Nhập mã PIN"
                      keyboardType="number-pad"
                      maxLength={6}
                      value={password}
                      onChangeText={handlePassword}
                      // validate={[Validator.required, Validator.checkPIN]}
                    />
                  </View>
                </View>
                <View style={[styles.dCenter, {marginTop: verticalScale(22)}]}>
                  <TouchableOpacity
                    style={styles.loginTOuch}
                    onPress={callApiLogin}>
                    <Text style={styles.loginText}>Đăng nhập</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.dCenter, {marginTop: verticalScale(22)}]}>
                  <Pressable>
                    <Text style={styles.forgotPassWord}>Quên mã PIN</Text>
                  </Pressable>
                </View>
                <View
                  style={[
                    {
                      marginTop: verticalScale(20),
                    },
                  ]}>
                  <LineText title="Hoặc" />
                </View>
                <View style={[styles.dCenter, {marginTop: verticalScale(12)}]}>
                  <TouchableOpacity
                    style={styles.registerTOuch}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.loginText}>Đăng kí mới</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1}} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: verticalScale(17),
                  }}>
                  <Text>{'username' + `text:}`}</Text>
                  <TouchableOpacity>
                    <View style={styles.language}>
                      <Text>Tiếng Việt</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.language}>
                      <Text>English</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    paddingVertical: 25,
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(12),
                      textAlign: 'center',
                      ...Fonts.defaultLight,
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
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    // paddingHorizontal: (25),
    backgroundColor: '#fff',
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: verticalScale(85),
  },
  introduce: {
    fontSize: moderateScale(16),
    color: '#555353',
    textAlign: 'center',
    ...Fonts.defaultRegular,
  },
  title: {
    fontSize: moderateScale(32),
    color: '#f9ba09',
    textTransform: 'uppercase',
    textAlign: 'center',
    // fontFamily: 'Roboto-Bold',
    ...Fonts.defaultBold,
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
    width: scale(320),
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
    paddingLeft: scale(10),
    // marginLeft: scale(25),
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
  float: {
    position: 'absolute',
    top: verticalScale(0),
    left: scale(15),
    width: scale(30),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    zIndex: 1,
  },
  loginText: {
    color: 'white',
    fontSize: moderateScale(16),
    ...Fonts.defaultRegular,
    // fontFamily: 'Roboto-Regular',
  },
  forgotPassWord: {
    textAlign: 'center',
    //fontFamily: 'Roboto-Regular',
    ...Fonts.defaultRegular,
  },
  registerTOuch: {
    backgroundColor: '#EC1C24',
    width: scale(320),
    height: verticalScale(46),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  language: {
    paddingLeft: scale(10),
    paddingRight: scale(10),
    borderColor: '#7A7A7A',
  },
  termsOfUse: {
    color: '#0054FC',
    fontSize: moderateScale(12),
    ...Fonts.defaultMediumItalic,
    textTransform: 'capitalize',
  },
});

export default LoginScreen;
