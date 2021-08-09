import React, {Component, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImageBanner from '../../../assets/images/login/banner.jpg';
import FlagVN from '../../../assets/images/login/flag_vn.png';
import UserLock from '../../../assets/images/login/user_lock.png';
import BackWIcon from '../../../assets/images/common/BackwhiteIcon.png';
import SiliverCoin from '../../../assets/images/home/silivercoin.png';
import GoldCoin from '../../../assets/images/home/goldcoin.png';
import ArrowIcon from '../../../assets/images/mail/arrowIcon.png';
import TicketIcon from '../../../assets/images/mail/ticketIcon.png';
import Message from '../../../assets/images/mail/message.png';
import NewspaperIcon from '../../../assets/images/mail/newspaper.png';
import GiftIcon from '../../../assets/svg/ic_gift.svg';
import BackIcon from '../../../assets/svg/common/ic_back_black.svg';
import ConvertIcon from '../../../assets/svg/convert.svg';
import CommonStyles from '../../utils/commonStyle';
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
import Fonts from '../../utils/commonStyle';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../libs/reactSize/scalingUtils';
import {CURRENCY} from '../../utils/Const';
import PurchaseCodeItem from './item/PurchaseCodeItem';
const {width, height} = Dimensions.get('window');
const WalletScreen = ({route}) => {
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
                {/* <BackIcon style={styles.icon} /> */}
                <Image style={styles.icon} source={BackWIcon} />
              </View>
            </Pressable>
          </View>
          <Text style={styles.center}>VÍ FM</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.menuContent}>
            <View style={styles.productRow}>
              <Text style={styles.productTitle}>Điểm Tích Luỹ</Text>
              <TouchableOpacity>
                <View style={styles.shadow}>
                  <Text style={styles.transactionHistoryBtn}>
                    Lịch sử giao dịch
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: scale(10),
              }}>
              <Text style={styles.totalLabel}>Tổng:</Text>
              <Text style={styles.totalPoint}>1.500.000</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <ConvertIcon
                  width={14}
                  height={13}
                  color={'#333333'}
                  style={{marginTop: -3}}
                />
                <Text
                  style={{
                    ...Fonts.defaultLight,
                    fontSize: moderateScale(12),
                    color: '#333333',
                  }}>
                  49.000.000 {CURRENCY}
                </Text>
              </View>
            </View>
            <View style={styles.line} />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: scale(6),
                }}>
                <Image style={{width: 23, height: 23}} source={SiliverCoin} />
                <Text style={styles.siliverCoin}>500.000</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <ConvertIcon
                  width={14}
                  height={13}
                  color={'#333333'}
                  style={{marginTop: -3}}
                />
                <Text
                  style={{
                    ...Fonts.defaultLight,
                    fontSize: moderateScale(11),
                  }}>
                  20.000.000 {CURRENCY}
                </Text>
              </View>
            </View>
            <View style={{marginTop: verticalScale(8)}}>
              <Text style={styles.expiryDate}>
                Thời hạn sử dụng:{' '}
                <Text style={styles.expiryDateTime}>09.07.2022</Text>
              </Text>
              <Text style={styles.content}>
                Nếu trong <Text style={styles.bold}>01</Text> năm không phát
                sinh giao dịch sẽ bị hủy.
              </Text>
            </View>
            <View style={styles.line} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: scale(6),
              }}>
              <Image style={{width: 23, height: 23}} source={GoldCoin} />
              <Text style={styles.goldCoin}>1.000.000</Text>
              <View style={{flex: 1}} />
              <TouchableOpacity
              //   onPress={() => navigation.navigate('RechargePoints')}
              >
                <View style={[styles.shadow]}>
                  <Text style={styles.buyMore}>+ Mua thêm</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={() => {}}>
                <View style={styles.gift}>
                  <GiftIcon width={scale(12)} height={verticalScale(11)} />
                  <Text style={styles.giftLabel}>Tặng</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ConvertIcon
                width={14}
                height={13}
                color={'#333333'}
                style={{marginTop: -3}}
              />
              <Text
                style={{
                  ...Fonts.defaultLight,
                  fontSize: moderateScale(11),
                }}>
                47.000.000 {CURRENCY}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.expiryDate, {color: '#F9BA09'}]}>
                Thời hạn sử dụng:{' '}
                <Text style={styles.expiryDateTime}>Không thời hạn</Text>
              </Text>
              <View style={{flex: 1}} />
            </View>
            <View style={styles.line} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: scale(6),
              }}>
              <Text style={styles.conversionCoefficient}>Hệ số quy đổi:</Text>
              <Text style={styles.mediumItalic}> 01 </Text>
              <Text style={styles.conversionCoefficient}>điểm =</Text>
              <Text style={styles.mediumItalic}> 50</Text>
              <Text style={styles.conversionCoefficient}> {CURRENCY}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: scale(10),
              }}>
              <Text style={styles.purchaseCode}>Mã số mua hàng</Text>
              <TouchableOpacity
              //   onPress={() => navigation.navigate('RechargePoints')}
              >
                <View style={([styles.shadow], {paddingLeft: scale(29)})}>
                  <Text style={styles.buyMore}>+ Mua thêm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <PurchaseCodeItem />
            <PurchaseCodeItem />
            <PurchaseCodeItem />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    backgroundColor: '#efefef',
  },
  red: {
    color: 'red',
  },
  header: {
    width: width,

    backgroundColor: '#F9CE54',
  },
  center: {
    padding: 15,
    textAlign: 'center',
    color: '#fff',
  },
  menuContent: {
    backgroundColor: '#fff',
    borderRadius: scale(14),
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
    margin: scale(20),
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: scale(5),
  },
  productTitle: {
    color: '#333333',
    fontSize: moderateScale(18),
    ...Fonts.defaultMedium,
    // marginHorizontal: 13,
    textTransform: 'uppercase',
    flex: 1,
  },
  line: {
    backgroundColor: '#D8D7D7',
    width: '100%',
    height: 0.5,
    marginTop: scale(7),
    marginBottom: scale(2),
  },
  siliverCoin: {
    ...Fonts.defaultRegular,
    fontSize: moderateScale(16),
    color: '#A9A9A9',
  },
  goldCoin: {
    ...Fonts.defaultRegular,
    fontSize: moderateScale(16),
    color: '#F9BA09',
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
    height: 20,
    width: 20,
    resizeMode: 'cover',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  expiryDate: {
    ...Fonts.defaultRegular,
    fontSize: moderateScale(12),
    color: '#333333',
  },
  expiryDateTime: {
    ...Fonts.defaultLight,
    fontSize: moderateScale(12),
    color: '#333333',
  },
  content: {
    ...Fonts.defaultLightItalic,
    fontSize: moderateScale(12),
    marginTop: scale(6),
    color: '#333333',
  },
  bold: {
    fontSize: moderateScale(12),
    ...Fonts.defaultMediumItalic,
    marginHorizontal: scale(3),
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 3,
  },
  transactionHistoryBtn: {
    backgroundColor: '#A9A9A9',
    paddingHorizontal: scale(6),
    paddingVertical: scale(4),
    borderRadius: scale(5),
    color: '#fff',
    overflow: 'hidden',
    fontSize: moderateScale(11),
    ...Fonts.defaultRegular,
  },
  buyMore: {
    ...Fonts.defaultRegular,
    color: '#fff',
    backgroundColor: '#EC1C24',
    fontSize: moderateScale(10),
    paddingHorizontal: scale(5),
    paddingVertical: scale(4),
    borderRadius: scale(5),
    overflow: 'hidden',
    // height: verticalScale(32),
  },
  totalPoint: {
    ...Fonts.defaultBold,
    color: '#EC1C24',
    marginHorizontal: scale(5),
    fontSize: moderateScale(18),
  },
  totalLabel: {
    ...Fonts.defaultRegular,
    color: '#333333',
    fontSize: moderateScale(18),
  },
  gift: {
    backgroundColor: '#F9CE54',
    paddingHorizontal: scale(12),
    paddingVertical: scale(5),
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(10),
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 3,
    marginVertical: 3,
  },
  giftLabel: {
    color: '#fff',
    fontSize: moderateScale(10),
    ...Fonts.defaultRegular,
    marginLeft: scale(6),
  },
  conversionCoefficient: {
    fontSize: moderateScale(12),
    ...Fonts.defaultLightItalic,
    color: '#333333',
  },
  mediumItalic: {
    ...Fonts.defaultMediumItalic,
    fontSize: moderateScale(12),
    color: '#333333',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    padding: scale(16),
  },
  purchaseCode: {
    fontSize: moderateScale(16),
    ...Fonts.defaultMedium,
    textTransform: 'uppercase',
  },
});
export default WalletScreen;
