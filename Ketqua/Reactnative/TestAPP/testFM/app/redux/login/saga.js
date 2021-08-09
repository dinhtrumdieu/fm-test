import {call, put, select} from 'redux-saga/effects';
import {actionLogin} from '../login/loginAction';
import factories from '../login/factory';
import {AsyncStorage} from 'react-native';

function* saveTokenToStore(data) {
  yield AsyncStorage.multiSet(
    [
      ['AccessToken', data.access_token],
      ['RefreshToken', data.refresh_token],
    ],
    err => {
      console.log('ERROR saveTokenToStore: ', err);
    },
  );
}

function* postLoginAction(username, password) {
  try {
    console.log(
      `Login Saga - postLoginAction: username: ${username} - password: ${password}`,
    );
    let response = yield call(factories.login, username, password); // Gọi API Login ở đây.
    yield call(saveTokenToStore, response); // Nếu API gọi thành công. Chúng ta save access_token và Store
    console.log('responseresponse ------------->', response);
    yield put({type: 'LOGIN_SUCCESS', payload: response}); // Gọi action LOGIN_SUCCESS
  } catch (err) {
    console.log('err  ------------->', err);
    yield put({type: 'LOGIN_FAILURE', err}); // Nếu lỗi gọi action LOGIN_FAILURE
  }
}

export default function* (action) {
  console.log('Login Saga - Action', action);
  yield call(postLoginAction, action.payload.username, action.payload.password);
}
