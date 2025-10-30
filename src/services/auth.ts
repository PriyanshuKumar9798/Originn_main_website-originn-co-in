import { apiFetch, UserResponse } from './httpClient'

export type RegisterRequest = {
  email: string
  password: string
  confirm_password: string
  full_name: string
}

export type RegisterResponse = {
  message: string
  user: UserResponse
}

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  message: string
  access_token: string
  token_type: 'bearer'
  user: UserResponse
}

export type ResetPasswordRequest = {
  email: string
  new_password: string
}

export type ResetPasswordResponse = {
  message: string
}

export const authApi = {
  register: (payload: RegisterRequest) =>
    apiFetch<RegisterResponse>('/api/v1/users/register', { method: 'POST', body: payload }),
  login: (payload: LoginRequest) =>
    apiFetch<LoginResponse>('/api/v1/users/login', { method: 'POST', body: payload }),
  resetPassword: (payload: ResetPasswordRequest) =>
    apiFetch<ResetPasswordResponse>('/api/v1/users/reset-password', { method: 'POST', body: payload }),
}


