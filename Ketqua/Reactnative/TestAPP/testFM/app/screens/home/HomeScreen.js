import 'react-native-gesture-handler';
import * as React from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import OnlineShoping from '../../../assets/svg/common/ic_back_black.svg';
import Help from '../../../assets/images/home/help.png';
import OnlineShoping from '../../../assets/images/home/onlinShop.png';
import History from '../../../assets/images/home/history.png';
import GetReward from '../../../assets/images/home/getReward.png';
import Complain from '../../../assets/images/home/complain.png';
import Map from '../../../assets/images/home/map.png';
import Readmore from '../../../assets/images/home/Readmore.png';
import Recruit from '../../../assets/images/home/recruit.png';
import Product from '../../../assets/images/home/product1.png';
import Slide1 from '../../../assets/images/home/slide1.png';
import SearchIcon from '../../../assets/images/home/searchIcon.png';
import GoldCoin from '../../../assets/images/home/goldcoin.png';
import SiliverCoin from '../../../assets/images/home/silivercoin.png';
import {Dimensions} from 'react-native';
import SliderSwiper from './item/SliderSwiper';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../libs/reactSize/scalingUtils';
const {width, height} = Dimensions.get('window');
// const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;

// const scale = size => (width / guidelineBaseWidth) * size;
// const verticalScale = size => (height / guidelineBaseHeight) * size;
// const moderateScale = (size, factor = 0.5) =>
//   size + (scale(size) - size) * factor;
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor="transparent"
        />

        <View style={styles.header}>
          <View
            style={{
              flex: 1,
              height: verticalScale(30),
              backgroundColor: '#F7BD2A',
              borderRadius: scale(10),
              paddingHorizontal: scale(15),
              color: '#fff',
              paddingVertical: 0,
              fontSize: moderateScale(13),
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image source={SearchIcon} />
          </View>
          <TouchableOpacity>
            <View
              style={[
                styles.coin,
                {
                  marginHorizontal: scale(5),
                },
              ]}>
              <Image
                style={{width: scale(25), height: verticalScale(25)}}
                source={GoldCoin}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.coin,
                {
                  marginHorizontal: scale(5),
                },
              ]}>
              <Image
                style={{width: scale(25), height: verticalScale(25)}}
                source={SiliverCoin}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.headerBottom} />
        <View style={styles.menu}>
          <View style={styles.menuContent}>
            <Text
              style={{
                fontFamily: 'Roboto-Light',
                fontSize: moderateScale(16),
              }}>
              Xin Chào{' '}
            </Text>
            <View style={styles.line} />
            <View style={styles.menuItem} numColumns={4}>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Image source={OnlineShoping} />
                  {/* <OnlineShoping /> */}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',

                    fontSize: moderateScale(13),
                    width: scale(70),
                  }}>
                  Mua hàng online
                </Text>
              </View>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Image source={History} />
                  {/* <OnlineShoping /> */}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',

                    fontSize: moderateScale(13),
                    width: scale(70),
                  }}>
                  Lịch sử mua hàng
                </Text>
              </View>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Image source={GetReward} />
                  {/* <OnlineShoping /> */}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',

                    fontSize: moderateScale(13),
                    width: scale(70),
                  }}>
                  Nhận thưởng
                </Text>
              </View>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Image source={Recruit} />
                  {/* <OnlineShoping /> */}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',

                    fontSize: moderateScale(13),
                    width: scale(70),
                  }}>
                  Tuyển dụng
                </Text>
              </View>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Image source={Map} />
                  {/* <OnlineShoping /> */}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',

                    fontSize: moderateScale(13),
                    width: scale(70),
                  }}>
                  Bản đồ
                </Text>
              </View>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Image source={Help} />
                  {/* <OnlineShoping /> */}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',

                    fontSize: moderateScale(13),
                    width: scale(70),
                  }}>
                  Trợ giúp
                </Text>
              </View>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Image source={Complain} />
                  {/* <OnlineShoping /> */}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',

                    fontSize: moderateScale(13),
                    width: scale(70),
                  }}>
                  Góp ý, khiếu nại
                </Text>
              </View>
              <View style={styles.item}>
                <View style={styles.icon}>
                  <Image source={Readmore} />
                  {/* <OnlineShoping /> */}
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto-Regular',

                    fontSize: moderateScale(13),
                    width: scale(70),
                  }}>
                  Xem thêm
                </Text>
              </View>
            </View>
          </View>
          <SliderSwiper />
          <View style={{paddingTop: scale(15)}}>
            <View>
              <View style={styles.bestSellerHeader}>
                <Text
                  style={{
                    color: '#fff',
                    textTransform: 'uppercase',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Sản phẩm bán chạy nhất
                </Text>
              </View>
            </View>
            <View style={styles.bestSellerItems}>
              <ScrollView
                contentContainerStyle={{
                  paddingHorizontal: scale(15),
                }}
                showsHorizontalScrollIndicator={false}
                horizontal>
                <View style={styles.product}>
                  <Image
                    resizeMode={'cover'}
                    source={Product}
                    style={{
                      resizeMode: 'cover',
                      borderRadius: scale(10),
                    }}
                  />
                  <Text style={styles.titleProduct}>Váy Babydoll 3 tầng</Text>
                  <Text style={styles.priceProduct}>150.000 VND</Text>
                </View>
                <View style={styles.product}>
                  <Image
                    resizeMode={'cover'}
                    source={Product}
                    style={{
                      resizeMode: 'cover',
                      borderRadius: scale(10),
                    }}
                  />
                  <Text style={styles.titleProduct}>Váy Babydoll 3 tầng</Text>
                  <Text style={styles.priceProduct}>150.000 VND</Text>
                </View>
                <View style={styles.product}>
                  <Image
                    resizeMode={'cover'}
                    source={Product}
                    style={{
                      resizeMode: 'cover',
                      borderRadius: scale(10),
                    }}
                  />
                  <Text style={styles.titleProduct}>Váy Babydoll 3 tầng</Text>
                  <Text style={styles.priceProduct}>150.000 VND</Text>
                </View>
                <View style={styles.product}>
                  <Image
                    resizeMode={'cover'}
                    source={Product}
                    style={{
                      resizeMode: 'cover',
                      borderRadius: scale(10),
                    }}
                  />
                  <Text style={styles.titleProduct}>Váy Babydoll 3 tầng</Text>
                  <Text style={styles.priceProduct}>150.000 VND</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={{paddingTop: scale(15)}}>
            <TouchableOpacity>
              <Text style={{color: '#707070', textTransform: 'uppercase'}}>
                Khuyến mãi
              </Text>
            </TouchableOpacity>
            <ScrollView>
              <View style={styles.discount}>
                <View
                  style={{
                    width: '100%',
                    height: scale(115),
                    marginBottom: scale(7),
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: scale(10),
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      zIndex: 5,
                    }}>
                    <Image
                      resizeMode={'cover'}
                      source={Slide1}
                      style={{
                        width: '100%',
                        height: '100%',
                        zIndex: 2,
                        backgroundColor: '#fff',
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.discount}>
                <View
                  style={{
                    width: '100%',
                    height: scale(115),
                    marginBottom: scale(7),
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: scale(10),
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      zIndex: 5,
                    }}>
                    <Image
                      resizeMode={'cover'}
                      source={Slide1}
                      style={{
                        width: '100%',
                        height: '100%',
                        zIndex: 2,
                        backgroundColor: '#fff',
                      }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
  },
  header: {
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    width: width,
    backgroundColor: '#F9CE54',
    paddingHorizontal: scale(15),
    paddingTop: scale(25),
    paddingBottom: scale(10),
  },
  headerBottom: {
    width: width,
    height: verticalScale(50),
    backgroundColor: '#F9CE54',
    borderBottomLeftRadius: scale(100),
    borderBottomRightRadius: scale(100),
  },
  // menu: {
  //   padding: scale(15),
  // },
  menuContent: {
    backgroundColor: '#fff',
    paddingTop: verticalScale(12),
    paddingLeft: scale(12),
    paddingRight: scale(12),
    borderRadius: scale(10),
    elevation: 3,
    display: 'flex',
  },
  line: {
    backgroundColor: '#D8D7D7',
    height: verticalScale(0.5),
    marginTop: verticalScale(10),
  },
  menu: {
    // width: width,
    marginTop: verticalScale(-45),
    paddingLeft: scale(15),
    paddingRight: scale(15),
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  menuItem: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginTop: verticalScale(15),
  },
  item: {
    width: scale(70),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  icon: {
    textAlign: 'center',
    width: scale(35),
    height: verticalScale(35),
    marginBottom: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestSellerHeader: {
    paddingLeft: scale(15),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(25),
    borderTopRightRadius: scale(10),
    borderTopLeftRadius: scale(10),
    backgroundColor: '#f3c84d',
    textTransform: 'uppercase',
  },
  bestSellerItems: {
    borderRadius: scale(15),
    marginTop: verticalScale(-20),
    overflow: 'hidden',
    backgroundColor: '#fff',
    paddingVertical: scale(15),
    elevation: 3,
  },
  product: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(30),
    borderRadius: scale(10),
    width: width / 4,
  },
  titleProduct: {
    fontWeight: '300',
    fontSize: moderateScale(12),
    color: '#333333',
    marginTop: verticalScale(8),
    fontFamily: 'Roboto-Italic',
  },
  priceProduct: {
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    color: '#FFBD00',
    marginTop: verticalScale(7),
  },
  discount: {
    width: width,
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  coin: {
    backgroundColor: '#F7BD2A',
    borderRadius: scale(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: scale(10),
    minWidth: scale(77),
    height: verticalScale(30),
  },
});
export default HomeScreen;
