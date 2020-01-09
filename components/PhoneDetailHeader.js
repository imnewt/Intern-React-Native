import React, { Component } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

import Find from "../images/find.png"
import Home from "../images/home.png"
import Cart from "../images/shopping-cart.png"
import More from "../images/more-options.png"

export default class PhoneDetailHeader extends Component {
    constructor(props) {
        super(props);
        this.state ={
            //nums: 0
        }
    }

    render() {
        //const { nums } = this.state;
        const { moveToCart, count } = this.props;
        console.log(count);
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={Find} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={Home} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.cartBtn}
                    onPress={moveToCart}>
                        <Image style={styles.icon} source={Cart} />
                        <Text style={styles.nums}>{count || 0}</Text>
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
    },
    cartBtn: {
        position: "relative"
    },
    nums: {
        position: "absolute",
        top: -5,
        right: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 3,
        paddingVertical: 0.5,
        borderRadius: 4
    }
})