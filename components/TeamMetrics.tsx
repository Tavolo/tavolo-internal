export default function TeamMetrics() {
  const metrics = {
    velocity: 42,
    velocityChange: +8,
    sprintProgress: 68,
    sprintDaysLeft: 4,
    openBugs: 12,
    criticalBugs: 2,
    prsPending: 5,
    avgReviewTime: '4.2h',
  }

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Team Metrics
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded p-3">
          <div className="text-2xl font-bold text-gray-800">{metrics.velocity}</div>
          <div className="text-sm text-gray-500">
            Velocity
            <span className="text-green-600 ml-1">+{metrics.velocityChange}</span>
          </div>
        </div>

        <div className="border border-gray-200 rounded p-3">
          <div className="text-2xl font-bold text-gray-800">{metrics.sprintProgress}%</div>
          <div className="text-sm text-gray-500">Sprint Progress</div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div
              className="bg-blue-600 h-1.5 rounded-full"
              style={{ width: `${metrics.sprintProgress}%` }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-1">{metrics.sprintDaysLeft} days left</div>
        </div>

        <div className="border border-gray-200 rounded p-3">
          <div className="text-2xl font-bold text-gray-800">{metrics.openBugs}</div>
          <div className="text-sm text-gray-500">
            Open Bugs
            {metrics.criticalBugs > 0 && (
              <span className="text-red-600 ml-1">({metrics.criticalBugs} critical)</span>
            )}
          </div>
        </div>

        <div className="border border-gray-200 rounded p-3">
          <div className="text-2xl font-bold text-gray-800">{metrics.prsPending}</div>
          <div className="text-sm text-gray-500">PRs Pending Review</div>
          <div className="text-xs text-gray-400 mt-1">Avg review: {metrics.avgReviewTime}</div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Sprint Burndown</h3>
        <div className="flex items-end h-16 gap-1">
          {[28, 26, 24, 22, 20, 18, 16, 14, 13, 11].map((val, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-500 rounded-t"
              style={{ height: `${(val / 28) * 100}%` }}
            />
          ))}
          {[9, 7, 5, 3].map((val, i) => (
            <div
              key={i + 10}
              className="flex-1 bg-gray-300 rounded-t"
              style={{ height: `${(val / 28) * 100}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Day 1</span>
          <span>Today</span>
          <span>Day 14</span>
        </div>
      </div>
    </div>
  )
}
