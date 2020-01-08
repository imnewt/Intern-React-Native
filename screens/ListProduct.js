import React, { Component } from 'react'
import { View, StyleSheet } from "react-native"
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import ListProductHeader from "../components/ListProductHeader"
import SortBySelling from '../components/SortBySelling'
import DeliTo from "../components/DeliTo" 
import PhoneInfo from '../components/PhoneInfo'

const db = require("../db.json")

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isChecked: false
        }
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#189eff',
        },
        headerTitle: () => <ListProductHeader/>
    };

    componentDidMount = async() => {
        await this.setState({
            products: db.products
        })
    }

    handleCBValueChange = async () => {
        await this.setState({
            isChecked: !this.state.isChecked
        })
        const { products } = this.state;
        const temp = products;
        if(this.state.isChecked) {
            const filteredList = temp.filter(item => item.tikinow === true)
            await this.setState({
                products: filteredList
            })
        }
        else {
            await this.setState({
                products: db.products
            })
        }
    }

    handlePress = data => {
        const { navigate } = this.props.navigation;
        navigate("PhoneDetail", {data: data})
    }
    
    render() {
        const { products, isChecked } = this.state;
        return (
            <ScrollView>
                <SortBySelling/>
                <DeliTo isChecked={isChecked} handleCBValueChange={this.handleCBValueChange}/>
                <View style={styles.listProduct}>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <PhoneInfo data={item} handlePress={this.handlePress}/>}
                        keyExtractor={(item) => `${item.id}`}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    listProduct: {
        flex: 1
    }
})