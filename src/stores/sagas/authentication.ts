import { Action } from 'redux-actions';
import { takeEvery } from 'redux-saga/effects';
import { authenticationAction, IAuthState } from 'stores/reducers/authentication';

function handleLoadAuthentication(action: Action<IAuthState>) {
  if (typeof action.payload.token !== 'undefined') {
    sessionStorage.setItem('token', action.payload.token);
  }
}

function trackLogout() {
  sessionStorage.removeItem('token');
}

export function* watchAuthentication() {
  yield takeEvery(authenticationAction.setAuthenticated.toString(), handleLoadAuthentication);
  yield takeEvery(authenticationAction.logout.toString(), trackLogout);
}
