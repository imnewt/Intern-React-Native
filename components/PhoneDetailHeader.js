import React, { Component } from "react"
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"

import Find from "../images/find.png"
import Home from "../images/home.png"
import Cart from "../images/shopping-cart.png"
import More from "../images/more-options.png"

export default class PhoneDetailHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={Find} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={Home} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={Cart} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={More} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginLeft: 15,
        marginRight: 15
    },
    icon: {
        width: 28,
        height: 28,
        marginRight: 15
    }  
})