import React from "react"
import { View, Image, Text } from "react-native"

import DSort from "../images/descending-sort.png"

export default function() {
    return (
        <View>
            <View>
                <Image source={DSort}/>
                <Text></Text>
            </View>
            <View>
                <Image/>
                <Text></Text>
            </View>
        </View>
    )
}