import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from "react-native"

import CartItem from "../components/CartItem"
import { CartContext } from "../contexts/Cart"
import { ScrollView } from 'react-native-gesture-handler'

export default class CartScreen extends Component {
    static navigationOptions = {
        title: 'Cart',
    };

    _changeFormat(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    render() {
        return (
            <CartContext.Consumer>
                {({ total }) =>  !total    
                ?   <View style={styles.emptyCart}>
                        <Text style={styles.emptyText}>Hãy thêm sản phẩm vào giỏ nhé!</Text>
                    </View> 
                :   <ScrollView style={styles.container}>
                        <CartContext.Consumer>
                            {({ cartItems, increase, decrease }) => cartItems.map(item => <CartItem data={item} key={item.id} increase={increase} decrease={decrease}/>)}
                        </CartContext.Consumer>
                        <CartContext.Consumer>
                            {({ money }) => 
                                <View style={styles.moneyCtn}>
                                    <Text style={styles.money}>Thành tiền: {this._changeFormat(money)} VNĐ</Text>
                                </View>
                            }
                        </CartContext.Consumer>
                        <TouchableOpacity style={styles.pay}>
                            <Text style={styles.payText}>Thanh toán</Text>
                        </TouchableOpacity>
                    </ScrollView>}
            </CartContext.Consumer>
        )
    }
}

const styles = StyleSheet.create({
    emptyCart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyText: {
        fontSize: 24,
        fontWeight: "700"
    },
    container: {
        
    },
    moneyCtn: {
        marginTop: 20,
        alignItems: "center"
    },
    money: {
        fontSize: 24,
        fontWeight: "700"
    },
    pay: {
        marginTop: 20,
        marginHorizontal: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#189eff"
    },
    payText: {
        fontSize: 20,
        fontWeight: "700"
    }
}) 