import React from 'react';

import { Text, View } from 'react-native';

export function Island({ size, label }) {
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
                    backgroundColor: "white",
                    borderWidth: size / 20,
                    borderColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
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
    );
}