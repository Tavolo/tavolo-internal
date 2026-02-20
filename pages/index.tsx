import { useState, useEffect } from 'react'
import Head from 'next/head'
import TeamMetrics from '@/components/TeamMetrics'
import DeploymentStatus from '@/components/DeploymentStatus'
import CustomerHealth from '@/components/CustomerHealth'
import AdminTools from '@/components/AdminTools'

const CORRECT_PASSWORD = 'tavolo123'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem('tavolo_internal_auth')
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('tavolo_internal_auth', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('tavolo_internal_auth')
    setIsAuthenticated(false)
    setPassword('')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Tavolo Internal - Login</title>
        </Head>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h1 className="text-xl font-semibold text-gray-800 mb-6">Tavolo Internal</h1>
            <form onSubmit={handleSubmit}>
              <label className="block text-sm text-gray-600 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                placeholder="Enter password"
                autoFocus
              />
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              <button
                type="submit"
                className="w-full mt-4 bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Tavolo Internal Dashboard</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-800">Tavolo Internal</h1>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TeamMetrics />
            <DeploymentStatus />
            <CustomerHealth />
            <AdminTools />
          </div>
        </main>
      </div>
    </>
  )
}
