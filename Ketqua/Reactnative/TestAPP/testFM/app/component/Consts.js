import {
  moderateScale,
  scale,
  verticalScale,
} from './../libs/reactSize/scalingUtils';

//API Product: https://fmplus.com.vn
//API Test: http://fmplustest.xyz
//API Dev: http://fmplusdev.xyz

// ======== PRODUCT DOMAIN ===========
// export const BASE_API_URL = 'https://fmplus.com.vn/api/1.0';
// export const SIGNALR_URL = 'https://fmplus.com.vn';
// export const API_KEY = '7h6zLBzFBwZZU2WwMh9Z6ZS7ykz9p95pVVEeD5ta';

// ======== STAGING DOMAIN ===========
// export const BASE_API_URL = 'http://fmplustest.xyz/api/1.0';
// export const SIGNALR_URL = 'http://fmplustest.xyz';
// export const API_KEY = 'PnVdWXApSHQlUiJDey14aFU4TVVROT1aP0tAOVhwSGE';

// ======== DEV ===========
export const BASE_API_URL = 'http://fmplusdev.xyz/api/1.0';
export const SIGNALR_URL = 'http://fmplusdev.xyz';
export const API_KEY = 'PnVdWXApSHQlUiJDey14aFU4TVVROT1aP0tAOVhwSGE';

export const DARK_MODE = 'DARK_MODE';
export const LIGHT_MODE = 'LIGHT_MODE';
export const PRIMARY = 'PRIMARY';
export const SECONDARY = 'SECONDARY';
export const CANCEL = 'CANCEL';
export const DANGER = 'DANGER';
export const INIT_FIRST_LOAD = 'INIT_FIRST_LOAD';
export const BLACK_LIST_STRING = 'KimHoangVu,Fm,FmStyle,Fmkid,FmMen,Fmkids';
export const CURRENCY = 'VND';
export const CAPTCHA_SITE_KEY = '6LdAA9UaAAAAAExxWr_rzIQ-eY4Pdk_St9X_gps2';
export const CAPTCHA_BASE_URL = 'http://fmstyle.com';
export const TEMP_LOCK = 10;
export const LOCK = 20;
export const DEAULT_LIMIT = 12;
export const FROM_HISTORY_ORDER = 1;
export const FROM_HISTORY_POINT = 2;
// ======== SIGNALR ===========
export const SHOW_MODAL_EXPIRE = 'SHOW_MODAL_EXPIRE';
export const SHOW_MODAL_WARNING_LOGIN = 'SHOW_MODAL_WARNING_LOGIN';
export const SHOW_MODAL_REGISTER_SUCCESS = 'SHOW_MODAL_REGISTER_SUCCESS';
// ======== Font size =========
export const FONT_TITLE = moderateScale(18);
export const FONT_SUB_TITLE = moderateScale(16);
export const FONT_NORMAL = moderateScale(14);
export const FONT_SMALL = moderateScale(12);
export const PADDING_POPUP_VERTICAL = verticalScale(20);
export const PADDING_POPUP_HORIZONTAL = verticalScale(15);
export const LINE_HEIGHT_POPUP = moderateScale(20);
export const SEPARATOR_WIDTH = 1;

// ======== POPUP ===========
export const POPUP_BUY_POINT = 1;
export const POPUP_BUY_VOUCHER = 2;
export const POPUP_ENTER_PIN_EMAIL = 3;
export const POPUP_ENTER_PIN_PHONE = 4;
export const POPUP_REGISTER_SUCCESS = 5;
export const POPUP_UPDATE_INFORMATION_FINISH = 6;
export const POPUP_RECEIVE_VOUCHER_FROM_SYSTEM = 7;
export const POPUP_RECEIVE_POINT_FROM_SYSTEM = 8;
export const POPUP_ERROR_NETWORK = 9;
export const POPUP_REFUND_ORDER_SUCCESS = 10;
export const POPUP_ACCOUNT_LOCKED = 11;
export const POPUP_INCREASE_RANK = 13;
export const POPUP_GIVE_POINT = 14;
export const POPUP_GIVE_VOUCHER = 15;
export const POPUP_VOUCHER_WILL_EXPIRE = 16;
export const POPUP_INCREASE_RANK_IN_TOP = 17;
export const POPUP_WARRANTY_POLICY = 18;
export const POPUP_CUSTOMER_POLICY = 19;
export const POPUP_WHOLESALE_POLICY = 20;
export const POPUP_CHANGE_TERM_OF_USE = 21;
export const POPUP_CHANGE_SECURITY_POLICY = 22;
export const POPUP_CANCEL_ACCOUNT = 23;
export const POPUP_POOR_SECURITY = 24;
export const POPUP_NEED_VERIFY_ACCOUNT = 25;
export const POPUP_PREPARE_AUCTION = 26;
export const POPUP_AUCTION_SUCCESS = 27;
export const POPUP_DAILY_GET_REWARD = 28;

// ========= GENDER ==========
export const GENDER_MALE = 'M';
export const GENDER_FEMALE = 'F';
export const GENDER_OTHER = 'S';
// ========= FAQ ==========
export const FAQ_MEMBERSHIP = '1';
export const FAQ_ACCOUNT = '2';
export const FAQ_PAYMENT = '3';
export const FAQ_WALLET = '4';

// ======== review ==========
export const COMPLAIN = 1; // khiếu nại, phản hồi
export const FEEDBACK = 2; // góp ý
// ======== Rank ==========
export const RANK_NORMAL = -1;
export const RANK_BRONZE = 0;
export const RANK_SILVER = 1;
export const RANK_GOLD = 2;
export const RANK_DIAMOND = 3;
