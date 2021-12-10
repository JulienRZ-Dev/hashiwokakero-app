const gridMock =
{
    "grid" : {
        "nb_columns" : 3,
        "islands" : [
            {
                "position" : 0,
                "population" : 1,
                "connections" : [{"to": 2, "type": "simple"}]
            }, 
            {
                "position" : 1,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 2,
                "population" : 3,
                "connections" : [{"to": 0, "type": "simple"}, {"to": 8, "type": "double"}]
            }, 
            {
                "position" : 3,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 4,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 5,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 6,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 7,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 8,
                "population" : 2,
                "connections" : [{"to": 2, "type": "double"}]
            }
        ]            
    }
}

export function getGridMock3() {
    return(gridMock);
}