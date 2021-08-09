import React, {Component, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../assets/svg/ic_back.svg';
import Fonts from '../../utils/commonStyle';
import FastImage from 'react-native-fast-image';
import Avatar from '../../../assets/images/account/account.png';
import VerifyIcon from '../../../assets/svg/ic_verified.svg';
import ArrowIcon from '../../../assets/svg/ic_arrow_right.svg';
import HeartIcon from '../../../assets/svg/ic_heart.svg';
import CheckIcon from '../../../assets/svg/ic_check.svg';
import VoteIcon from '../../../assets/svg/ic_vote.svg';
import ShareIcon from '../../../assets/svg/ic_share.svg';
import UserIcon from '../../../assets/svg/ic_avatar.svg';
import SettingIcon from '../../../assets/svg/ic_settings.svg';
import LogoutIcon from '../../../assets/svg/ic_logout.svg';
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
const AccountScreen = ({route}) => {
  const navigation = useNavigation();
  // useEffect(() => {}, []);
  const handleBack = () => {
    console.log('handleBack');
    navigation.goBack();
  };
  function renderRowPurchaseMenu(title, number) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.confirm}>{title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header
        center={<Text style={styles.headerTitle}>Tài Khoản</Text>}
        left={
          <View style={styles.headerIcon}>
            <Pressable onPress={handleBack}>
              <View>
                <BackIcon />
              </View>
            </Pressable>
          </View>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.userInformation}>
            <TouchableOpacity onPress={console.log('aa')}>
              <FastImage
                resizeMode={'cover'}
                source={Avatar}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log('bb')} style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: scale(6),
                }}>
                <Text style={styles.userNameLabel}>Nguyễn Văn A</Text>
                <VerifyIcon style={{marginLeft: scale(10)}} />
              </View>
              <Text style={styles.phoneNumber}>0905123123</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <ArrowIcon />
            </TouchableOpacity>
          </View>
          <View style={{padding: scale(13)}}>
            <Text style={styles.title}>Đơn mua</Text>
            <View style={styles.itemContainer}>
              <View style={styles.item}>
                <View>
                  {renderRowPurchaseMenu('Chờ xác nhận', 0)}
                  <View style={styles.separatorRowItem} />
                  {renderRowPurchaseMenu('Đã Giao', 15)}
                </View>
                <View>
                  <View style={styles.separatorColumnItem} />
                  <View style={{height: scale(30)}} />
                  <View style={styles.separatorColumnItem} />
                </View>
                <View>
                  {renderRowPurchaseMenu('Chờ lấy hàng', 0)}
                  <View style={styles.separatorRowItem} />
                  {renderRowPurchaseMenu('Đã Huỷ', 0)}
                </View>
                <View>
                  <View style={styles.separatorColumnItem} />
                  <View style={{height: scale(30)}} />
                  <View style={styles.separatorColumnItem} />
                </View>
                <View>
                  {renderRowPurchaseMenu('Đang giao', 2)}
                  <View style={styles.separatorRowItem} />
                  {renderRowPurchaseMenu('Trả hàng', 0)}
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingHorizontal: scale(12)}}>
            <Text style={styles.title}>Sản Phẩm</Text>
            <View style={styles.WrapperProduct}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.productRow}>
                <HeartIcon
                  width={scale(18)}
                  height={scale(18)}
                  color={'#707070'}
                />
                <Text style={styles.productTitle}>Đã thích</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.likeNumber}>25</Text>
                  <ArrowIcon />
                </View>
              </TouchableOpacity>
              <View style={styles.lineProduct} />
              <View style={styles.lineProduct} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.productRow}>
                <CheckIcon
                  width={scale(18)}
                  height={scale(18)}
                  color={'#707070'}
                />
                <Text style={styles.productTitle}>Đã xem gần đây</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.likeNumber}></Text>
                  <ArrowIcon />
                </View>
              </TouchableOpacity>
              <View style={styles.lineProduct} />
              <View style={styles.lineProduct} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.productRow}>
                <VoteIcon
                  width={scale(18)}
                  height={scale(18)}
                  color={'#707070'}
                />
                <Text style={styles.productTitle}>Đánh giá của tôi</Text>
                <View style={styles.flexRow}>
                  <Text style={styles.likeNumber}>6</Text>
                  <ArrowIcon />
                </View>
              </TouchableOpacity>
              <View style={styles.lineProduct} />
              <View style={styles.lineProduct} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.productRow}>
                <ShareIcon
                  width={scale(18)}
                  height={scale(18)}
                  color={'#707070'}
                />
                <Text style={styles.productTitle}>
                  Giới thiệu bạn bè, nhận thêm thưởng
                </Text>
                <View style={styles.flexRow}>
                  <Text style={styles.likeNumber}></Text>
                  <ArrowIcon />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: scale(13)}}>
            <Text style={styles.title}>Tài khoản</Text>
            <View style={styles.WrapperProduct}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.productRow}>
                <UserIcon
                  width={scale(18)}
                  height={scale(18)}
                  color={'#707070'}
                />
                <Text style={styles.productTitle}>Thông tin cá nhân</Text>
                <View style={styles.flexRow}>
                  <ArrowIcon />
                </View>
              </TouchableOpacity>
              <View style={styles.lineProduct} />
              <View style={styles.lineProduct} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.productRow}>
                <SettingIcon
                  width={scale(18)}
                  height={scale(18)}
                  color={'#707070'}
                />
                <Text style={styles.productTitle}>Cài đặt</Text>
                <View style={styles.flexRow}>
                  <ArrowIcon />
                </View>
              </TouchableOpacity>
              <View style={styles.lineProduct} />
              <View style={styles.lineProduct} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.productRow}>
                <LogoutIcon
                  width={scale(18)}
                  height={scale(18)}
                  color={'#707070'}
                />
                <Text style={styles.productTitle}>Đăng xuất</Text>
                <View style={styles.flexRow}>
                  <ArrowIcon />
                </View>
              </TouchableOpacity>
            </View>
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
  userInformation: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(13),
  },
  headerTitle: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    ...Fonts.defaultBold,
    color: '#FFFFFF',
  },
  headerIcon: {
    fontSize: moderateScale(20),
    textAlign: 'left',
    ...Fonts.defaultBold,
    color: '#FFFFFF',
  },
  avatar: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    backgroundColor: '#F9CE54',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(18),
  },
  title: {
    color: '#333333',
    fontSize: moderateScale(18),
    ...Fonts.defaultMedium,
    marginBottom: scale(10),
  },
  userNameLabel: {
    fontSize: moderateScale(18),
    color: '#333333',
  },
  phoneNumber: {
    fontSize: moderateScale(14),
    color: '#333333',
    ...Fonts.defaultLight,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    paddingVertical: scale(11),
    paddingHorizontal: scale(15),
    borderRadius: scale(10),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
  number: {
    color: '#1100A8',
    fontSize: moderateScale(24),
    ...Fonts.defaultMedium,
    marginBottom: scale(4),
  },
  confirm: {
    color: '#333333',
    fontSize: moderateScale(13),
    ...Fonts.defaultLight,
  },
  separatorColumnItem: {
    backgroundColor: '#DCDCDC',
    height: scale(48),
    width: 0.5,
  },
  separatorRowItem: {
    backgroundColor: '#DCDCDC',
    width: scale(78),
    height: 1,
    marginVertical: scale(10),
  },
  WrapperProduct: {
    paddingHorizontal: scale(15),
    borderRadius: scale(10),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
  productTitle: {
    color: '#333333',
    fontSize: moderateScale(16),
    ...Fonts.defaultLight,
    marginHorizontal: scale(13),
    flex: 1,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(13),
  },
  dotWarning: {
    width: scale(10),
    height: scale(10),
    backgroundColor: 'red',
    borderRadius: scale(5),
    marginRight: scale(10),
  },
  lineProduct: {
    backgroundColor: '#D8D7D7',
    width: '100%',
    height: 0.5,
  },
  likeNumber: {
    color: '#333333',
    fontSize: moderateScale(14),
    marginRight: scale(10),
  },
});
export default AccountScreen;
