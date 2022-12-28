import { APIConfig } from 'types/api';

export const login: APIConfig = {
  endPoint: '/api/login',
  keys: ['login'],
  method: 'POST',
};

export const resetPassword: APIConfig = {
  endPoint: '/api/password-reset',
  keys: ['reset-password'],
  method: 'POST',
};

export const newPassword: APIConfig = {
  endPoint: '/api/password-reset',
  keys: ['new-password'],
  method: 'PUT',
};

export const checkToken = (token?: string): APIConfig => ({
  endPoint: `/api/password-reset/{token}`,
  keys: [`check-token/${token}`],
  method: 'GET',
});

export const getMe: APIConfig = {
  endPoint: '/api/me',
  keys: ['profile'],
  method: 'GET',
};
