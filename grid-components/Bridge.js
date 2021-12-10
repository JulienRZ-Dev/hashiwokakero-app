import React from 'react'
import { View } from 'react-native'
import { Line } from 'react-native-svg'

export function Bridge({ x1, y1, x2, y2, type }) {

    if (type === "simple") {

        return (

            <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" strokeWidth="3" />

        )

    } else {

        return (

            <View>

                <Line x1={x1 - 5} y1={y1 - 5} x2={x2 - 5} y2={y2 - 5} stroke="red" strokeWidth="3" />

                <Line x1={x1 + 5} y1={y1 + 5} x2={x2 + 5} y2={y2 + 5} stroke="red" strokeWidth="3" />

            </View>

        )
    }

}