import { apiFetch } from './httpClient'

export type UserProfile = {
  id: number
  email: string
  full_name: string
  role: string
  created_at: string
}

export type GetMeResponse = {
  message: string
  data: UserProfile
}

export const userApi = {
  getProfile: (authToken: string) =>
    apiFetch<GetMeResponse>('/api/v1/users/me', { method: 'GET', authToken }),
}

export type UpdateProfileRequest = {
  full_name: string
}

export type UpdateProfileResponse = {
  message: string
  data: {
    id: number
    email: string
    full_name: string
    role: string
  }
}

export const updateUserApi = {
  updateProfile: (authToken: string, payload: UpdateProfileRequest) =>
    apiFetch<UpdateProfileResponse>('/api/v1/users/me', { method: 'PUT', body: payload, authToken }),
}


