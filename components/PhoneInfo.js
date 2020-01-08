import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"

import Tiki from "../images/tiki-now.png"
import Star from "../images/star.png"

export default class PhoneInfo extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Products',
    };

    render() {
        const { data, handlePress } = this.props;
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={() => handlePress(data)}
                >
                <View style={styles.imgContainer}>
                    <Image resizeMode="stretch" style={styles.phoneImg} source={data.listImg[0].img} />
                </View>
                <View style={styles.infoContainer}>
                    <Image resizeMode="stretch" style={styles.tikiNow} source={Tiki}/>
                    <Text style={styles.phoneName}>{data.name} - Hàng chính hãng</Text>
                    <View style={styles.phonePriceContainer}>
                        <Text style={styles.phonePrice}>{data.price} VNĐ</Text>
                        <Text style={styles.phoneDiscount}>-{data.discount}%</Text>
                    </View>
                    <Text style={styles.fastDeli}>>> GIAO NHANH 2H</Text>
                    { data.paySup && <Text style={styles.paySup}>Trả góp 0%</Text>}
                    <View style={styles.phoneRating}>
                        <View style={styles.stars}>
                            <Image style={styles.star} source={Star}/>
                            <Image style={styles.star} source={Star}/>
                            <Image style={styles.star} source={Star}/>
                            <Image style={styles.star} source={Star}/>
                            <Image style={styles.star} source={Star}/>
                        </View>
                        <Text style={styles.comment}>({data.comment})</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        paddingVertical: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        // backgroundColor: "#fff",
        // shadowColor: "#000",
        // shadowOpacity: 0.3,
        // shadowRadius: 10,
        // shadowOffset: { width: 0, height: 0}

    },
    imgContainer: {
        flex: 1
    },
    phoneImg: {
        width: "100%",
        height: "100%"
    },
    infoContainer: {
        flex: 1.5
    },
    tikiNow: {
        marginTop: 5,
        width: 80,
        height: 25
    },
    phoneName: {
        marginTop: 5,
        fontSize: 17,
        fontWeight: "700"
    },
    phonePriceContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    phonePrice: {
        fontSize: 16,
        fontWeight: "700"
    },
    phoneDiscount: {
        fontSize: 16,
        marginLeft: 10
    },
    fastDeli: {
        marginTop: 5,
        fontSize: 16,
        color: "#26bc4e"
    },
    paySup: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "600"
    },
    phoneRating: {
        marginTop: 5,
        flexDirection: "row"
    },
    stars: {
        flexDirection: "row"
    },
    star: {
        width: 15,
        height: 15,
        marginRight: 2
    },
    comment: {
        color: "#787878",
        marginLeft: 10
    }
}) 