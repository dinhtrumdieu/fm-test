import {DeviceEventEmitter, Platform} from 'react-native';

const DEVELOPMENT = true;

export default class AppConfig {
  static API_VERSION = 'v1';

  static ACCESS_TOKEN = '';

  static IS_SAVE_ACCOUNT = false;

  static TOKEN_SECRET = '';

  static SERIAL_NUMBER = '3fac8eb404f9b9fe';

  static PLAYER_ID = 'b8acaccb-f21f-4f36-b723-344738de8b15';

  static BROWER = 'samsung SM-G975N';

  static IP = '';

  static FULLNAME = '';

  static PHONE = '';

  static BLACK_LIST_STRING = '';

  static MIN_AGE = 11;

  static _eventEmitter = DeviceEventEmitter;

  static TIMEOUT_SCREEN = 300;

  static COUNTDOWN_RESEND_IF_ERROR = 10;

  static COUNTDOWN_RESEND_OTP = 300;

  static ANDROID_VERSION = '1.0.1';

  static IOS_VERSION = '1.0.1';

  static SHOW_MODAL_SAVE_ACCOUNT = true;

  static CAPTCHA_SITE_KEY = '6LdBqOUbAAAAAGR-hjglsgD9G3SFiySzfGhugKDL';

  static CAPTCHA_BASE_URL = 'http://localhost';

  static LAT = '';

  static LON = '';

  static MAX_FILE_UPLOAD = 0;

  static MAX_SIZE_UPLOAD = 0;

  static REVIEW_CONTENT_LENGTH = 0;

  static dev() {
    return __DEV__;
  }

  static isLogin() {
    return !!AppConfig.ACCESS_TOKEN;
  }

  static isDev() {
    return DEVELOPMENT;
  }

  static getApiVersion() {
    return AppConfig.API_VERSION;
  }
  static listenEvent(key, callback) {
    AppConfig._eventEmitter.addListener(key, callback);
  }
  static emit(key, params) {
    AppConfig._eventEmitter.emit(key, params);
  }

  static getAppVersion() {
    return Platform.OS === 'ios'
      ? AppConfig.IOS_VERSION
      : AppConfig.ANDROID_VERSION;
  }
}
