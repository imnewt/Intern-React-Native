import React, { Component } from "react"
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native"

import Find from "../images/find.png"
import Cart from "../images/shopping-cart.png"
import More from "../images/more-options.png"

import { CartContext } from "../contexts/Cart"

export default class ListProductHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ""
        }
    }

    render() {
        const { moveToCart } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.inputCtn}>
                    <Image source={Find} style={styles.findIcon} />
                    <TextInput 
                        style={styles.input}
                        placeholder="Điện thoại - Máy tính bảng"
                        value={this.state.textInput}
                        onChangeText={text => this.setState({textInput: text})}
                    />
                </View>
                <View style={styles.iconCtn}>
                    <TouchableOpacity
                        style={styles.cartBtn}
                        onPress={moveToCart}>
                            <Image style={styles.icon} source={Cart} />
                            <CartContext.Consumer>
                                {({ total }) => (
                                    <Text style={styles.nums}>{total}</Text>
                                )}
                            </CartContext.Consumer>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={More} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    inputCtn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 5,
    },
    findIcon: {
        width: 24,
        height: 24,
        marginLeft: 5
    },
    input: {
        fontSize: 16,
        marginLeft: 5
    },
    iconCtn: {
        flexDirection: "row"
    },
    icon: {
        width: 28,
        height: 28,
        marginHorizontal: 10
    },
    cartBtn: {
        position: "relative"
    },
    nums: {
        position: "absolute",
        top: -5,
        right: 2,
        backgroundColor: "#fff",
        paddingHorizontal: 3,
        paddingVertical: 0.5,
        borderRadius: 4
    }
})