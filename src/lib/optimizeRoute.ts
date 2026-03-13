/* eslint-disable @typescript-eslint/no-explicit-any */
export function optimizeRoute(places: any[]) {

  if (places.length <= 2) return places

  const timeOrder: any = {
    morning: 1,
    afternoon: 2,
    evening: 3
  }

  const sortedByTime = [...places].sort((a, b) => {
    const ta = timeOrder[a.bestTime] || 2
    const tb = timeOrder[b.bestTime] || 2
    return ta - tb
  })

  const groups: any = {
    morning: [],
    afternoon: [],
    evening: []
  }

  sortedByTime.forEach((p) => {
    const key = p.bestTime || "afternoon"
    groups[key].push(p)
  })

  function optimizeDistance(arr: any[]) {

    if (arr.length <= 2) return arr

    const ordered = [arr[0]]
    const remaining = arr.slice(1)

    while (remaining.length > 0) {

      const last = ordered[ordered.length - 1]

      let closestIndex = 0
      let closestDistance = Infinity

      remaining.forEach((p, i) => {

        if (!p.coords || !last.coords) return

        const d = Math.sqrt(
          Math.pow(last.coords.lat - p.coords.lat, 2) +
          Math.pow(last.coords.lon - p.coords.lon, 2)
        )

        if (d < closestDistance) {
          closestDistance = d
          closestIndex = i
        }

      })

      ordered.push(remaining[closestIndex])
      remaining.splice(closestIndex, 1)

    }

    return ordered

  }

  return [
    ...optimizeDistance(groups.morning),
    ...optimizeDistance(groups.afternoon),
    ...optimizeDistance(groups.evening)
  ]

}