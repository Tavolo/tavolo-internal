import { useState } from 'react'

export default function AdminTools() {
  const [activeTask, setActiveTask] = useState<string | null>(null)

  const tools = [
    { id: 'sync-demo', name: 'Sync Demo Data', desc: 'Reset demo accounts to fresh state' },
    { id: 'clear-cache', name: 'Clear Cache', desc: 'Purge Redis and CDN caches' },
    { id: 'gen-report', name: 'Generate Report', desc: 'Weekly metrics for standup' },
    { id: 'import-csv', name: 'Bulk Import', desc: 'Import reservations from CSV' },
  ]

  const recentJobs = [
    { name: 'sync-demo', time: 'Today 09:15', status: 'completed', duration: '2m 14s' },
    { name: 'gen-report', time: 'Yesterday', status: 'completed', duration: '45s' },
    { name: 'clear-cache', time: 'Feb 17', status: 'completed', duration: '8s' },
    { name: 'import-csv', time: 'Feb 15', status: 'failed', duration: '1m 02s' },
  ]

  const handleRun = (id: string) => {
    setActiveTask(id)
    setTimeout(() => {
      setActiveTask(null)
      alert(`Task "${id}" completed (simulated)`)
    }, 2000)
  }

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Admin Tools
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => handleRun(tool.id)}
            disabled={activeTask !== null}
            className={`text-left border border-gray-200 rounded p-3 hover:border-gray-400 transition-colors ${
              activeTask === tool.id ? 'bg-gray-100' : ''
            } disabled:opacity-50`}
          >
            <div className="font-medium text-gray-800 text-sm">
              {activeTask === tool.id ? 'Running...' : tool.name}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">{tool.desc}</div>
          </button>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Recent Jobs</h3>
        <div className="space-y-1">
          {recentJobs.map((job, i) => (
            <div key={i} className="flex items-center text-sm">
              <span className="text-gray-600 flex-1">{job.name}</span>
              <span className="text-gray-400 text-xs w-20">{job.time}</span>
              <span
                className={`text-xs w-16 text-right ${
                  job.status === 'completed' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {job.status}
              </span>
              <span className="text-gray-400 text-xs w-16 text-right">{job.duration}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Quick Links</h3>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="text-xs text-blue-600 hover:underline">Datadog</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-xs text-blue-600 hover:underline">Sentry</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-xs text-blue-600 hover:underline">AWS Console</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-xs text-blue-600 hover:underline">GitHub</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-xs text-blue-600 hover:underline">Stripe</a>
        </div>
      </div>
    </div>
  )
}
