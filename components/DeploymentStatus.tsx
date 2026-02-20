export default function DeploymentStatus() {
  const deployments = [
    {
      env: 'Production',
      version: 'v2.4.1',
      status: 'healthy',
      lastDeploy: '2 hours ago',
      uptime: '99.97%',
    },
    {
      env: 'Staging',
      version: 'v2.5.0-beta.3',
      status: 'healthy',
      lastDeploy: '45 min ago',
      uptime: '99.82%',
    },
    {
      env: 'Development',
      version: 'v2.5.0-dev.47',
      status: 'degraded',
      lastDeploy: '12 min ago',
      uptime: '98.5%',
    },
  ]

  const recentDeploys = [
    { time: '14:32', env: 'staging', user: 'maria', result: 'success' },
    { time: '14:15', env: 'dev', user: 'alex', result: 'success' },
    { time: '12:47', env: 'production', user: 'james', result: 'success' },
    { time: '11:23', env: 'dev', user: 'sarah', result: 'failed' },
    { time: '09:58', env: 'staging', user: 'maria', result: 'success' },
  ]

  const statusColors: Record<string, string> = {
    healthy: 'bg-green-500',
    degraded: 'bg-yellow-500',
    down: 'bg-red-500',
  }

  const resultColors: Record<string, string> = {
    success: 'text-green-600',
    failed: 'text-red-600',
  }

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Deployment Status
      </h2>

      <div className="space-y-3">
        {deployments.map((d) => (
          <div key={d.env} className="flex items-center justify-between border border-gray-200 rounded p-3">
            <div className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${statusColors[d.status]}`} />
              <div>
                <div className="font-medium text-gray-800">{d.env}</div>
                <div className="text-xs text-gray-500">{d.version}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">{d.uptime} uptime</div>
              <div className="text-xs text-gray-400">Deployed {d.lastDeploy}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Recent Deployments</h3>
        <div className="space-y-1">
          {recentDeploys.map((d, i) => (
            <div key={i} className="flex items-center text-sm">
              <span className="text-gray-400 w-12">{d.time}</span>
              <span className="text-gray-600 w-20">{d.env}</span>
              <span className="text-gray-600 flex-1">@{d.user}</span>
              <span className={resultColors[d.result]}>{d.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
