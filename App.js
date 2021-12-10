import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Grid from './grid-components/Grid'

import { getGridMock3 } from './grid-data/gridMock3'
import { getGridMock4 } from './grid-data/gridMock4'
import { addGridCenters, addGridIslandsSizes } from './grid-utils/utils'

export default function App() {

  // Calculate the aspect ratio
  const dimensions = useRef(Dimensions.get("window"))
  const width = dimensions.current.width

  const [loading, setLoading] = useState(true)
  const [grid, setGrid] = useState(null)


  useEffect(async () => {

    // Get the grid from the mock
    let tmp = await getGridMock4().grid

    // Get the centers coordinates
    tmp = await addGridIslandsSizes(tmp, width)
    tmp = await addGridCenters(tmp, width)
    setGrid(tmp)
    setLoading(false)

  }, []);

  if (!loading) {

    return (

      <Grid grid={grid} />

    )

  } else {

    return (

      <View>

        <Text>wait</Text>

      </View>

    )

  }
}