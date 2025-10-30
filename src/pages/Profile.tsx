import { useEffect, useMemo, useState } from 'react'
import { userApi, UserProfile, updateUserApi } from '../services/user'
import { readSession, saveSession } from '../services/httpClient'

export const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editFullName, setEditFullName] = useState('')
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const initials = useMemo(() => {
    if (!profile?.full_name) return 'U'
    const parts = profile.full_name.trim().split(/\s+/)
    const first = parts[0]?.[0] || ''
    const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
    return `${first}${last}`.toUpperCase() || 'U'
  }, [profile?.full_name])

  useEffect(() => {
    const session = readSession()
    if (!session) return
    const load = async () => {
      try {
        const res = await userApi.getProfile(session.token)
        setProfile(res.data)
        setEditFullName(res.data.full_name)
      } catch (err: any) {
        setError(err?.message || 'Failed to load profile')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-slate-100 animate-pulse" />
              <div className="flex-1">
                <div className="h-4 w-40 bg-slate-100 rounded animate-pulse" />
                <div className="mt-2 h-3 w-64 bg-slate-100 rounded animate-pulse" />
              </div>
            </div>
          </div>
          <div className="p-6 grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-4">
                <div className="h-3 w-24 bg-slate-100 rounded animate-pulse" />
                <div className="mt-3 h-4 w-40 bg-slate-100 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">{error || 'Profile unavailable'}</div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                aria-label="User avatar"
                className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center text-lg font-bold"
              >
                {initials}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{profile.full_name}</h1>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="text-slate-600">{profile.email}</span>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 border border-slate-200">ID #{profile.id}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-semibold capitalize">{profile.role}</span>
              <span className="hidden sm:inline text-xs text-slate-500">Joined {new Date(profile.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-600">Full name</div>
                {!isEditing ? (
                  <button onClick={() => { setIsEditing(true); setSuccess(null); }} className="text-xs text-blue-600 hover:underline">Edit</button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={async () => {
                        if (!editFullName.trim()) return
                        setSaving(true)
                        setError(null)
                        setSuccess(null)
                        try {
                          const session = readSession()
                          if (!session) throw new Error('Not authenticated')
                          const res = await updateUserApi.updateProfile(session.token, { full_name: editFullName.trim() })
                          setProfile((prev) => prev ? { ...prev, full_name: res.data.full_name } : prev)
                          // persist updated name in session
                          saveSession({ token: session.token, user: { ...session.user, full_name: res.data.full_name } })
                          setIsEditing(false)
                          setSuccess('Profile updated successfully')
                        } catch (e: any) {
                          setError(e?.message || 'Failed to update profile')
                        } finally {
                          setSaving(false)
                        }
                      }}
                      className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                      disabled={saving || !editFullName.trim()}
                    >
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                    <button onClick={() => { setIsEditing(false); setEditFullName(profile.full_name) }} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">Cancel</button>
                  </div>
                )}
              </div>
              {!isEditing ? (
                <div className="mt-2 text-slate-900">{profile.full_name}</div>
              ) : (
                <input
                  value={editFullName}
                  onChange={(e) => setEditFullName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Your full name"
                />
              )}
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="text-sm font-semibold text-slate-600">Email</div>
              <div className="mt-1 text-slate-900 break-all">{profile.email}</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="text-sm font-semibold text-slate-600">Role</div>
              <div className="mt-1 text-slate-900 capitalize">{profile.role}</div>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="text-sm font-semibold text-slate-600">Created at</div>
              <div className="mt-1 text-slate-900">{new Date(profile.created_at).toLocaleString()}</div>
            </div>
          </div>
          {(error || success) && (
            <div className="mt-4">
              {error && <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-2 text-sm">{error}</div>}
              {success && <div className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-2 text-sm">{success}</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile


