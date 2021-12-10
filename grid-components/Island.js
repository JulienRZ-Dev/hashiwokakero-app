import React from 'react';

import { Text, View } from 'react-native';

export function Island({ size, label, x, y }) {

    return (

        <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <View
                style={{
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    borderWidth: size / 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: x,
                    top: y,
                    backgroundColor: "white",
                    zIndex: 1
                }}
            >

                <Text
                    style={{
                        color: "black",
                        fontSize: size / 2
                    }}
                >{label}</Text>

            </View>

        </View>

    )
}