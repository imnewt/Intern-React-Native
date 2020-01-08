import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"

import DSort from "../images/order.png"
import Control from "../images/controls.png"

export default function() {
    return (
        <View style={styles.container}>
            <View style={styles.sortCtn}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={DSort}/>
                </TouchableOpacity>
                <Text style={styles.sortText}>Sắp xếp:
                    <Text style={styles.textBlue}> Bán chạy</Text>
                </Text>
            </View>
            <View style={styles.controlCtn}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={Control}/>
                </TouchableOpacity>
                <Text style={styles.controlText}>Lọc</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        padding: 15
    },
    icon: {
        width: 28,
        height: 28,
        marginRight: 10
    },
    sortCtn: {
        flexDirection: "row",
        alignItems: "center"
    },
    sortText: {
        fontSize: 17
    },
    textBlue: {
        color: "#189eff",
    },
    controlCtn: {
        flexDirection: "row",
        alignItems: "center"
    },
    controlText: {
        fontSize: 17
    }
})