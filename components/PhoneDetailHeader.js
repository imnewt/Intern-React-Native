import React, { Component } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

import Find from "../images/find.png"
import Home from "../images/home.png"
import Cart from "../images/shopping-cart.png"
import More from "../images/more-options.png"

import { CartContext } from "../contexts/Cart"

export default class PhoneDetailHeader extends Component {
    render() {
        const { moveToCart} = this.props;
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
                        <CartContext.Consumer>
                            {({ cartItems }) => (
                                <Text style={styles.nums}>{cartItems.length}</Text>
                            )}
                        </CartContext.Consumer>
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