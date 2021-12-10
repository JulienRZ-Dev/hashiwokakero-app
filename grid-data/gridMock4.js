const gridMock =
{
    "grid" : {
        "nb_columns" : 4,
        "islands" : [
            {
                "position" : 0,
                "population" : 2,
                "connections" : [{"to": 1, "type": "simple"}, {"to": 8, "type": "simple"}]
            }, 
            {
                "position" : 1,
                "population" : 2,
                "connections" : [{"to": 0, "type": "simple"}, {"to": 3, "type": "simple"}]
            }, 
            {
                "position" : 2,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 3,
                "population" : 2,
                "connections" : [{"to": 1, "type": "simple"}, {"to": 15, "type": "simple"}]
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
                "population" : 3,
                "connections" : [{"to": 0, "type": "simple"}, {"to": 10, "type": "double"}]
            },
            {
                "position" : 9,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 10,
                "population" : 2,
                "connections" : [{"to": 8, "type": "double"}]
            }, 
            {
                "position" : 11,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 12,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 13,
                "population" : 2,
                "connections" : [{"to": 15, "type": "double"}]
            }, 
            {
                "position" : 14,
                "population" : 0,
                "connections" : []
            }, 
            {
                "position" : 15,
                "population" : 3,
                "connections" : [{"to": 13, "type": "double"}, {"to": 3, "type": "simple"}]
            }, 
        ]            
    }
}

export function getGridMock4() {
    return(gridMock);
}