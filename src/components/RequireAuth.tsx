import { ReactNode, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { readSession } from '../services/httpClient'

type RequireAuthProps = {
  children: ReactNode
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const session = readSession()

  useEffect(() => {
    if (!session) {
      window.dispatchEvent(new CustomEvent('originn:open-login'))
    }
  }, [session])

  if (!session) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}


