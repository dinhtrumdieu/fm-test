import {moderateScale} from '../libs/reactSize/scalingUtils';

const Fonts = {
  defaultRegular: {
    fontFamily: 'Roboto-Regular',
  },
  defaultBold: {
    fontFamily: 'Roboto-Bold',
  },
  defaultBlack: {
    fontFamily: 'Roboto-Black',
  },
  defaultItalic: {
    fontFamily: 'Roboto-Italic',
  },
  defaultLight: {
    fontFamily: 'Roboto-Light',
  },
  defaultMedium: {
    fontFamily: 'Roboto-Medium',
  },
  defaultLightItalic: {
    fontFamily: 'Roboto-LightItalic',
  },
  defaultMediumItalic: {
    fontFamily: 'Roboto-MediumItalic',
  },
};
const CommonStyles = {
  screen: {
    flex: 1,
    // backgroundColor: CommonColors.screenBgColor,
  },
  header: {
    backgroundColor: '#F9CE54',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    ...Fonts.defaultBold,
    color: '#FFFFFF',
    // textTransform: 'capitalize',
  },
};
export default {Fonts, CommonStyles};
