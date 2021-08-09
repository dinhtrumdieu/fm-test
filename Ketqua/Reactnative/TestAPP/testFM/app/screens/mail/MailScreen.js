import React, {Component, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImageBanner from '../../../assets/images/login/banner.jpg';
import FlagVN from '../../../assets/images/login/flag_vn.png';
import UserLock from '../../../assets/images/login/user_lock.png';
import BackWIcon from '../../../assets/images/common/BackwhiteIcon.png';
import BellIcon from '../../../assets/images/mail/bell.png';
import ArrowIcon from '../../../assets/images/mail/arrowIcon.png';
import TicketIcon from '../../../assets/images/mail/ticketIcon.png';
import Message from '../../../assets/images/mail/message.png';
import NewspaperIcon from '../../../assets/images/mail/newspaper.png';
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
import {Dimensions} from 'react-native';
import Header from '../../component/Header';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../../libs/reactSize/scalingUtils';
const {width, height} = Dimensions.get('window');
const MailScreen = ({route}) => {
  const navigation = useNavigation();
  const handleBack = () => {
    console.log('handleBack');
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle={'light-content'}
          />
          <View style={styles.float}>
            <Pressable onPress={handleBack}>
              <View>
                <Image style={styles.icon} source={BackWIcon} />
              </View>
            </Pressable>
          </View>
          <Text style={styles.center}>Hộp Thư</Text>
        </View>
      </View>
      <View style={styles.menuContent}>
        <TouchableOpacity style={styles.productRow}>
          <Image source={BellIcon} />
          <Text style={styles.productTitle}>Thông báo</Text>
          <Image source={ArrowIcon} />
          <Text style={styles.numberNofi}>1</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.productRow}>
          <Image source={Message} />
          <Text style={styles.productTitle}>Tin Nhắn</Text>
          <Image source={ArrowIcon} />
          <Text style={styles.numberNofi}>1</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity style={styles.productRow}>
          <Image source={NewspaperIcon} />
          <Text style={styles.productTitle}>Tin Tức</Text>
          <Image source={ArrowIcon} />
          <Text style={styles.numberNofi}>1</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <TouchableOpacity style={styles.productRow}>
          <Image source={TicketIcon} />
          <Text style={styles.productTitle}>Khuyến mãi</Text>
          <Image source={ArrowIcon} />
          <Text style={styles.numberNofi}>1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    backgroundColor: '#efefef',
  },
  header: {
    width: width,

    backgroundColor: '#F9CE54',
  },
  center: {
    padding: scale(15),
    textAlign: 'center',
    color: '#fff',
  },
  menuContent: {
    marginTop: verticalScale(24),
    marginHorizontal: scale(12),
    paddingHorizontal: scale(15),
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: verticalScale(4),
    },
    elevation: 3,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 15,
  },
  productTitle: {
    color: '#333333',
    fontSize: moderateScale(16),
    fontFamily: 'Roboto-Light',
    marginHorizontal: 13,
    flex: 1,
  },
  line: {
    backgroundColor: '#D8D7D7',
    width: '100%',
    height: 0.5,
  },
  float: {
    position: 'absolute',
    top: 0,
    left: 15,
    width: scale(31),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
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
  numberNofi: {
    fontSize: moderateScale(9),
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 7,
    backgroundColor: '#EC1C24',
    color: '#fff',
    position: 'absolute',
    overflow: 'hidden',
    top: 6,
    left: 25,
    lineHeight: 10,
  },
});
export default MailScreen;
