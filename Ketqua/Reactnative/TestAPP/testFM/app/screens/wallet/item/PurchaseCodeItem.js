import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import GiftIcon from '../../../../assets/svg/ic_gift.svg';
import {
  moderateScale,
  verticalScale,
  scale,
} from '../../../libs/reactSize/scalingUtils';
import Fonts from '../../../utils/commonStyle';
import {CURRENCY} from '../../../utils/Const';
import backgroundImage from '../../../../assets/images/walletFm/bg_buy_product_1.png';
const PurchaseCodeItem = () => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Image
          resizeMode={'cover'}
          style={{
            width: scale(360),
            marginLeft: -scale(10),
            // marginTop: scale(10),
            height: scale(105),
          }}
          source={backgroundImage}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            height: scale(95),
            width: scale(85),
          }}>
          <Text style={styles.price}>Giảm giá</Text>
          <Text style={[styles.priceValue]}>12%</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: scale(95),
            width: scale(240),
            // backgroundColor: 'red',
            height: scale(100),
            justifyContent: 'center',
            marginTop: verticalScale(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              numberOfLines={1}
              style={[styles.titleContentItem, {flex: 1}]}>
              Mã số: <Text style={styles.codeLabel}>1234567890</Text>
            </Text>
            <View style={{width: scale(3)}} />
            <View style={styles.gift}>
              <GiftIcon width={scale(12)} height={verticalScale(11)} />
              <Text style={styles.giftLabel}>Tặng</Text>
            </View>
          </View>
          <Text style={[styles.titleContentItem, {marginTop: scale(5)}]}>
            Áp dụng tại:{' '}
            <Text style={styles.limitLabel}>48 Yên Bái, Đà Nẵng</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: scale(5),
            }}>
            <Text
              style={[
                styles.titleContentItem,
                {
                  marginBottom: scale(15),
                  fontSize: moderateScale(12),
                },
              ]}>
              Thời hạn sử dụng:
            </Text>
            <Text
              style={[
                styles.limitLabel,
                {
                  marginBottom: scale(15),
                  fontSize: moderateScale(12),
                },
              ]}>
              Không thời hạn
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    color: '#fff',
    textAlign: 'center',
  },
  priceValue: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    color: '#fff',
    textAlign: 'center',
  },
  titleContentItem: {
    fontSize: moderateScale(13),
    color: '#333333',
    ...Fonts.defaultLight,
  },
  codeLabel: {
    fontSize: moderateScale(13),
    color: '#EC1C24',
    ...Fonts.defaultMedium,
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
  text: {
    fontSize: moderateScale(12),
    color: '#333333',
    ...Fonts.defaultLight,
  },
  limitLabel: {
    ...Fonts.defaultRegular,
    fontSize: moderateScale(12),
    color: '#333333',
    fontWeight: '200',
  },
});
export default PurchaseCodeItem;
