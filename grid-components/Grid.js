import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Island } from "../grid-components/Island"
import { Bridge } from "../grid-components/Bridge"

import uuid from 'react-native-uuid'
import Svg from 'react-native-svg'

export default function Grid(grid) {

    const islandSize = grid.grid.islandsSize

    return (
        <Svg style={styles.container}>
            {
                grid.grid.islands.map((island) => {

                    if (island.population !== 0) {

                        return (

                            <Island
                                key={island.position}
                                size={islandSize}
                                label={island.population}
                                x={island.x - (islandSize / 2)}
                                y={island.y - (islandSize / 2)}
                            />

                        )

                    }

                })
            }
            {
                grid.grid.islands.map((island) => {

                    return (

                        island.connections.map((connection) => {

                            return (

                                <Bridge
                                    key={uuid.v4()}
                                    x1={island.x}
                                    y1={island.y}
                                    x2={grid.grid.islands[connection.to].x}
                                    y2={grid.grid.islands[connection.to].y}
                                    type={connection.type}
                                />

                            )

                        })

                    )

                })

            }
        </Svg>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 100
    }

});
