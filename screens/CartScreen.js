import React, { Component } from 'react'
import { View, StyleSheet, Image, Text} from "react-native"

import Tiki from "../images/tiki-now.png"
import Star from "../images/star.png"

import CartItem from "../components/CartItem"
import { CartContext } from "../contexts/Cart"
import { ScrollView } from 'react-native-gesture-handler'

export default class CartScreen extends Component {
    static navigationOptions = {
        title: 'Cart',
    };

    render() {
        return (
            <ScrollView>
                <CartContext.Consumer>
                    {({ cartItems }) => cartItems.map(item => <CartItem data={item} key={item.id}/>)}
                </CartContext.Consumer>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    
}) 