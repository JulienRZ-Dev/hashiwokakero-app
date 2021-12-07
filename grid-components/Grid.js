import React from 'react'
import { View } from 'react-native'

import { Island } from "../grid-components/Island"

export default function Grid(grid) {

    console.log(grid.grid.islands)

    const islandSize = grid.grid.islandsSize
    console.log(islandSize)


    return (
        <View>
            {
                grid.grid.islands.map((island) => {

                    if(island.population !== 0) {

                        return(

                            <Island
                                key={island.position}
                                size={islandSize}
                                label={island.population}
                                x={island.x}
                                y={island.y}
                            />
    
                        )

                    }

                })
            }
        </View>

    )

}
