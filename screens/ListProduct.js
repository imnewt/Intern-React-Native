import React, { Component } from 'react'
import { View, StyleSheet } from "react-native"
import { FlatList } from 'react-native-gesture-handler';

import PhoneInfo from '../components/PhoneInfo';

import Vsmart from '../images/vsmart.jpg';
import IPhone from '../images/iphone.jpg';
import Samsung from '../images/samsung.jpg';

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Điện thoại VSmart Live (64GB/6GB)",
                    price: "3.299.000",
                    discount: "58",
                    img: Vsmart,
                    comment: 241
                },
                {
                    id: 2,
                    name: "Điện thoại iPhone 11 Pro Max 64GB",
                    price: "31.490.000",
                    discount: "7",
                    img: IPhone,
                    paySup: true,
                    comment: 63
                },
                {
                    id: 3,
                    name: "Điện thoại Samsung Galaxy M30s (64GB/4GB) ",
                    price: "5.490.000",
                    discount: "21",
                    img: Samsung,
                    paySup: true,
                    comment: 69
                },
                {
                    id: 4,
                    name: "Điện thoại iPhone 11 Pro Max 64GB",
                    price: "31.490.000",
                    discount: "7",
                    img: IPhone,
                    paySup: true,
                    comment: 63
                },
            ]
        }
    }

    handlePress = data => () => {
        const { navigate } = this.props.navigation;
        navigate("PhoneDetail", {data: data})
    }
    
    render() {
        const { products } = this.state;
        return (
            <View style={styles.listProduct}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <PhoneInfo data={item} handlePress={this.handlePress}/>}
                    keyExtractor={(item) => `${item.id}`}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listProduct: {
        flex: 1
    }
})