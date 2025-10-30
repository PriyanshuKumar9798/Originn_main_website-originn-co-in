// Lightweight API client for Originn backend

export type StartupsQuery = {
  limit?: number
  cursor?: string | null
  include_total?: boolean
  search?: string | null
  stage?: string | null
  institute?: string | null
  category?: string | null
  product_type?: string | null
  target_market?: string | null
  sort_by?: 'created_at' | 'company_name' | 'stage' | 'updated_at'
  order?: 'asc' | 'desc'
}

export type StartupItem = {
  id: number
  company_name: string
  about_startup?: string
  stage?: string
  category?: string
  created_at?: string
}

export type StartupsResponse = {
  message: string
  data: StartupItem[]
  limit: number
  filters: Record<string, unknown>
  pagination: {
    next_cursor: string | null
    has_next: boolean
    total_in_page: number
    total?: number
  }
}

export type FiltersResponse = {
  categories: { values: { value: string; label: string }[]; has_custom?: boolean; custom_field?: string }
  institutes: { values: { value: string; label: string }[]; has_custom?: boolean; custom_field?: string }
  stages: { values: { value: string; label: string }[]; has_custom?: boolean }
  product_types: { values: { value: string; label: string }[]; has_custom?: boolean }
  target_markets: { values: { value: string; label: string }[]; has_custom?: boolean }
}

const buildQuery = (params: Record<string, unknown>) => {
  const q = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return
    q.append(key, String(value))
  })
  return q.toString()
}

const getBaseUrl = (): string => {
  const fromEnv = import.meta.env.VITE_API_BASE_URL as string | undefined
  return fromEnv?.replace(/\/$/, '') || ''
}

const getAuthToken = (): string | null => {
  // Expect token saved by app auth flow
  // e.g., localStorage.setItem('originn.token', '...')
  return localStorage.getItem('originn.token')
}

export async function fetchStartups(query: StartupsQuery = {}): Promise<StartupsResponse> {
  const base = getBaseUrl()
  const path = '/api/v1/users/startups'
  const qs = buildQuery({
    limit: query.limit ?? 20,
    cursor: query.cursor ?? null,
    include_total: query.include_total ?? false,
    search: query.search ?? null,
    stage: query.stage ?? null,
    institute: query.institute ?? null,
    category: query.category ?? null,
    product_type: query.product_type ?? null,
    target_market: query.target_market ?? null,
    sort_by: query.sort_by ?? 'created_at',
    order: query.order ?? 'desc',
  })

  const token = getAuthToken()
  const res = await fetch(`${base}${path}?${qs}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: 'include',
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Failed to fetch startups (${res.status}): ${text}`)
  }
  return (await res.json()) as StartupsResponse
}

export async function fetchFilters(): Promise<FiltersResponse> {
  const base = getBaseUrl()
  const path = '/api/v1/filters'
  const token = getAuthToken()
  const res = await fetch(`${base}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: 'include',
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Failed to fetch filters (${res.status}): ${text}`)
  }
  return (await res.json()) as FiltersResponse
}

export type StartupDetailResponse = {
  message: string
  data: {
    id: number
    company_name: string
    about_startup?: string
    product_description?: string
    company_website?: string
    stage?: string
    stage_description?: string | null
    category?: string
    category_other?: string | null
    product_type?: string
    target_market?: string
    institute_name?: string
    institute_custom?: string | null
    institute_details?: string | null
    team_members?: number
    logo?: string | null
    cover_photo?: string | null
    short_description?: string
    social_links?: {
      twitter?: string
      linkedin?: string
      facebook?: string
      website?: string
    }
    founders?: Array<{ full_name: string; designation?: string; institution?: string }>
    team?: Array<unknown>
    created_at?: string
  }
}

export async function fetchStartupById(id: string | number): Promise<StartupDetailResponse> {
  const base = getBaseUrl()
  const path = `/api/v1/users/startups/${id}`
  const token = getAuthToken()
  const res = await fetch(`${base}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: 'include',
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Failed to fetch startup (${res.status}): ${text}`)
  }
  return (await res.json()) as StartupDetailResponse
}


