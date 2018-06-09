import React from 'react'
import { Line } from 'react-konva'
import { toScale } from '../../../lib/canvas-math.js'

const Tracer = ({ mapSize, mapScale, players, tracer }) => {
    if (!tracer) return null

    const victimLoc = players.find(p => p.get('name') === tracer.victimName).get('location')
    const attackerLoc = players.find(p => p.get('name') === tracer.attackerName).get('location')

    return (
        <Line
            points={[
                toScale(mapSize, victimLoc.x), toScale(mapSize, victimLoc.y),
                toScale(mapSize, attackerLoc.x), toScale(mapSize, attackerLoc.y),
            ]}
            stroke="#FFFFFF80"
            strokeWidth={1 / Math.max(1, mapScale / 1.4)}
        />
    )
}

export default Tracer
