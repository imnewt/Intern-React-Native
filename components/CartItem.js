import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"

export default class CartItem extends Component {
    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.phoneInfo}>
                    <View style={styles.imgContainer}>
                        <Image resizeMode="stretch" style={styles.phoneImg} source={{uri: data.listImg[0].img}}/>
                    </View>
                    <View style={styles.nameAndPrice}>
                        <Text style={styles.phoneName}>{data.name}</Text>
                        <Text style={styles.phonePrice}>{data.price} VNĐ</Text>   
                    </View>
                </View>
                <View style={styles.quantityBlock}>
                    <Text style={styles.decrease}>-</Text>
                    <Text style={styles.quantity}>Sl</Text>
                    <Text style={styles.increase}>+</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 20,
    },
    phoneInfo: {
        flexDirection: "row",
        flex: 2,
    },
    imgContainer: {
        flex: 1
    },
    phoneImg: {
        width: "100%",
        height: 150
    },
    nameAndPrice: {
        flex: 1
    },
    phoneName: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "700"
    },
    phonePrice: {
        fontSize: 18,
        paddingTop: 15
    },
    quantityBlock: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
}) 