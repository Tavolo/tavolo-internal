export default function CustomerHealth() {
  const customers = [
    { name: 'Bella Italia Group', score: 92, trend: 'up', mrr: '$12,400', locations: 8 },
    { name: 'Nobu Holdings', score: 88, trend: 'stable', mrr: '$8,200', locations: 5 },
    { name: 'The Smith Restaurant', score: 85, trend: 'up', mrr: '$3,100', locations: 2 },
    { name: 'Chez Laurent', score: 76, trend: 'down', mrr: '$1,800', locations: 1 },
    { name: 'Sakura Sushi Chain', score: 71, trend: 'down', mrr: '$5,600', locations: 4 },
    { name: 'Urban Eats Co', score: 68, trend: 'stable', mrr: '$2,400', locations: 2 },
    { name: 'Café Moderne', score: 45, trend: 'down', mrr: '$900', locations: 1 },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return '↑'
    if (trend === 'down') return '↓'
    return '→'
  }

  const getTrendColor = (trend: string) => {
    if (trend === 'up') return 'text-green-500'
    if (trend === 'down') return 'text-red-500'
    return 'text-gray-400'
  }

  return (
    <div className="bg-white rounded shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Customer Health
        </h2>
        <span className="text-xs text-gray-400">7 accounts</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200">
              <th className="pb-2 font-medium">Customer</th>
              <th className="pb-2 font-medium text-right">Score</th>
              <th className="pb-2 font-medium text-right">MRR</th>
              <th className="pb-2 font-medium text-right">Locs</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.name} className="border-b border-gray-100 last:border-0">
                <td className="py-2 text-gray-800">{c.name}</td>
                <td className="py-2 text-right">
                  <span className={`font-medium ${getScoreColor(c.score)}`}>{c.score}</span>
                  <span className={`ml-1 ${getTrendColor(c.trend)}`}>{getTrendIcon(c.trend)}</span>
                </td>
                <td className="py-2 text-right text-gray-600">{c.mrr}</td>
                <td className="py-2 text-right text-gray-600">{c.locations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-green-600">4</div>
          <div className="text-xs text-gray-500">Healthy</div>
        </div>
        <div>
          <div className="text-lg font-bold text-yellow-600">2</div>
          <div className="text-xs text-gray-500">At Risk</div>
        </div>
        <div>
          <div className="text-lg font-bold text-red-600">1</div>
          <div className="text-xs text-gray-500">Critical</div>
        </div>
      </div>
    </div>
  )
}
