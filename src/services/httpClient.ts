type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://51.21.150.36:8000'

type FetchOptions = {
  method?: HttpMethod
  body?: unknown
  headers?: Record<string, string>
  authToken?: string | null
}

const buildHeaders = (extra?: Record<string, string>, authToken?: string | null) => {
  const headers: Record<string, string> = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    ...extra,
  }
  if (authToken) headers['Authorization'] = `Bearer ${authToken}`
  return headers
}

export const apiFetch = async <T>(path: string, options: FetchOptions = {}): Promise<T> => {
  const { method = 'GET', body, headers, authToken } = options
  const url = `${API_BASE_URL}${path}`

  const response = await fetch(url, {
    method,
    headers: buildHeaders(headers, authToken ?? null),
    credentials: 'include',
    body: body != null ? JSON.stringify(body) : undefined,
  })

  const isJson = response.headers.get('content-type')?.includes('application/json')
  const data = isJson ? await response.json() : (null as unknown as T)

  if (!response.ok) {
    const errorMessage = (data as any)?.message || `Request failed with status ${response.status}`
    throw new Error(errorMessage)
  }
  return data as T
}

export type UserResponse = {
  id: number
  email: string
  full_name: string
  role: string
}

export type AuthSession = {
  token: string
  user: UserResponse
}

export const saveSession = (session: AuthSession) => {
  try {
    localStorage.setItem('originn:isSignedIn', 'true')
    localStorage.setItem('originn:token', session.token)
    localStorage.setItem('originn:user', JSON.stringify(session.user))
  } catch {}
}

export const readSession = (): AuthSession | null => {
  try {
    const token = localStorage.getItem('originn:token')
    const userRaw = localStorage.getItem('originn:user')
    if (!token || !userRaw) return null
    return { token, user: JSON.parse(userRaw) as UserResponse }
  } catch {
    return null
  }
}

export const clearSession = () => {
  try {
    localStorage.removeItem('originn:isSignedIn')
    localStorage.removeItem('originn:token')
    localStorage.removeItem('originn:user')
  } catch {}
}


