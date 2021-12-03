import React, { useRef } from 'react'
import { View, Dimensions, FlatList } from 'react-native'
import Svg, {Line} from 'react-native-svg'

import { getGridMock } from '../grid-data/gridMock'
import { addGridCenters, addGridIslandsSizes } from '../grid-utils/utils'
import { Island } from '../grid-components/Island'

export default function Grid() {

    // Calculate the aspect ratio
    const dimensions = useRef(Dimensions.get("window"))
    const width = dimensions.current.width

    // Get the grid from the mock
    let grid = getGridMock().grid

    // Get the centers coordinates
    grid = addGridIslandsSizes(grid, width)
    grid = addGridCenters(grid, width)

    console.log(grid)

    const renderIsland = ({ item }) => (
        <View style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            flex: 1
        }}>
            {/* <Svg 
                style={{
                    position: "absolute"
                }} 
                height="100" 
                width="100"
            >
                <Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />
            </Svg> */}
            {
                item.population !== 0 ?
                    <Island
                        size={islandSize}
                        label={item.population}
                    /> :
                    <View style={{
                        width: islandSize,
                        height: islandSize
                    }} />
            }

        </View>
    )

    return (
        <FlatList
            style={{
                flex: 1,
                position: "relative"
            }}
            data={grid.islands}
            renderItem={renderIsland}
            keyExtractor={item => item.position}
            numColumns={grid.nb_columns}
        />
    )
}
