export async function addGridCenters(grid, containerWidth) {

    let x = []
    let y = []

    for(let i = 1; i <= grid.nb_columns; i++) {

        // Compute x position for each center
        y = containerWidth / (grid.nb_columns + 1) * (i)

        for(let j = 1; j <= grid.nb_columns; j++) {

            // Compute y position for each center
            x = containerWidth / (grid.nb_columns + 1) * (j)

            // Add x and y label for the island centers
            grid.islands[(i - 1) * grid.nb_columns + (j - 1)].x = x;
            grid.islands[(i - 1) * grid.nb_columns + (j - 1)].y = y;

        }

    }

    return grid

}

export async function addGridIslandsSizes(grid, containerWidth) {

    // Compute the island diameter from the dimensions and the number of columns
    const islandSize = containerWidth / (grid.nb_columns * 1.8)

    grid.islandsSize = islandSize

    return grid

} 