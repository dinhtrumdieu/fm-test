import {Alert, Dimensions, Platform} from 'react-native';
import AppConfig from '../component/AppConfig';
import md5 from 'md5';
const SALT = '123456789zxcvbnm';
export default class Utils {
  static getLocation() {
    return [AppConfig.LAT, AppConfig.LON];
  }
  static MD5(data) {
    return md5(data + SALT);
  }
}
