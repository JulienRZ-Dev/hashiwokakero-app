import React, { useRef } from 'react';
import { View, Dimensions, FlatList } from 'react-native';

import { getGridMock } from '../grid-data/gridMock';

import { Island } from '../grid-components/Island';

export default function Grid() {

    // Calculate the aspect ratio
    const dimensions = useRef(Dimensions.get("window"));
    const width = dimensions.current.width;

    // Get the grid from the mock
    const grid = getGridMock().grid;
    const nbColums = grid.col_number;

    // Compute the island diameter from the dimensions and grid size
    const islandSize = width / (nbColums * 1.6)

    const renderIsland = ({ item }) => (
        <Island
            size={islandSize}
            label={item.population}
        />
    )

    return (
        <View style={{
            flex: 1,
            width: width,
            display: "flex",
            justifyContent: "space-around"
        }}>
            <FlatList
                data={grid.islands}
                renderItem={renderIsland}
                keyExtractor={item => item.uuid}
                numColumns={nbColums}
            />
        </View>
    );
}
