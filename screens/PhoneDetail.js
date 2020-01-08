import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableOpacity} from "react-native"

import Tiki from "../images/tiki-now.png"
import Star from "../images/star.png"

export default class PhoneDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listImg: [
                
            ]
        }
    }

    static navigationOptions = {
        title: 'Phone',
    }

    _handlePress(item) {
        const tempList = this.state.listImg;
        const itemInList = tempList.find(img => img.img === item.img)
        if(!itemInList.isChosen) {
            tempList.map(img => img.isChosen = false)
            itemInList.isChosen = true
        }
        this.setState({
            listImg: tempList,
            img: item.img,
        })
    }

    componentDidMount  = () => {
        const { navigation } = this.props;
        const data = navigation.getParam("data");
        this.setState({
            listImg: data.listImg,
            img: data.listImg[0].img
        })
    }

    render() {
       
        const { navigation } = this.props;
        const data = navigation.getParam("data");
        const { img } = this.state;
        return (
            <ScrollView style={styles.container}>
                <Image resizeMode="stretch" style={styles.phoneImg} source={{uri: img}} />
                <View style={styles.chooseView}>
                    {
                        data.listImg.map((item,index) => 
                            <TouchableOpacity
                                key={index}
                                style={[styles.smImgContainter, item.isChosen && styles.hasBorder]}
                                onPress={() => this._handlePress(item)}
                            >
                                <Image style={styles.smImg} source={{uri: item.img}} />
                            </TouchableOpacity>)
                    }
                </View>
                <View style={styles.phoneInfo}>
                    <TouchableOpacity style={styles.colorPicker}>
                        <Text style={styles.colorStatus}>Màu: Chưa chọn</Text>
                        <Text style={styles.pickColor}>CHỌN ></Text>
                    </TouchableOpacity>
                    <View style={styles.nameContainer}>
                        { data.tikinow && <Image resizeMode="stretch" style={styles.tikiNow} source={Tiki} />}
                        <Text style={styles.phoneName}>{data.name}</Text>
                    </View>
                    <View style={styles.phoneRating}>
                        <View style={styles.stars}>
                            <Image style={styles.star} source={Star}/>
                            <Image style={styles.star} source={Star}/>
                            <Image style={styles.star} source={Star}/>
                            <Image style={styles.star} source={Star}/>
                            <Image style={styles.star} source={Star}/>
                        </View>
                        <Text style={styles.comment}>(XEM {data.comment} NHẬN XÉT)</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.phonePrice}>{data.price} VNĐ</Text>
                        <Text style={styles.phoneOldPrice}>{data.oldPrice}</Text>
                        <Text style={styles.phoneDiscount}>-{data.discount}%</Text>
                    </View>
                    <Text style={styles.fastDeli}>>> GIAO NHANH 2H</Text>
                    <Button 
                        title="Chọn mua"
                        color="red"
                    />
                    <Text style={styles.text}>{data.description}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15
    },
    phoneImg: {
        width: "100%",
        height: 500
    },
    chooseView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
    },
    smImgContainter: {
        padding: 5
    },
    hasBorder: {
        borderColor: "#49515a",
        borderWidth: 1
    },
    smImg: {
        width: 48,
        height: 48
    },
    phoneInfo: {
        // marginLeft: 15,
        // marginRight: 15
    },
    colorPicker: {
        marginTop: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 15,
        backgroundColor: "#f5f5f5",  
    },
    colorStatus: {
        flex: 1,
        fontSize: 16,
        textAlign: "left"
    },
    pickColor: {
        flex: 1,
        fontSize: 16,
        textAlign: "right",
        color: "#007ff0"
    },
    nameContainer: {
        flexDirection: "row",
        flex: 1,
        marginTop: 10
    },
    tikiNow: {
        flex: 1,
        marginTop: 5,
        width: 80,
        height: 25,
        marginRight: 15
    },
    phoneName: {
        flex: 4,
        marginTop: 5,
        //marginLeft: 15,
        fontSize: 22,
        fontWeight: "700"
    },
    phoneRating: {
        marginTop: 10,
        flexDirection: "row"
    },
    stars: {
        flexDirection: "row"
    },
    star: {
        width: 20,
        height: 20,
        marginRight: 2
    },
    comment: {
        color: "#007ff0",
        fontSize: 18,
        paddingLeft: 5
    },
    priceContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    phonePrice: {
        fontSize: 18,
        fontWeight: "700"
    },
    phoneOldPrice: {
        paddingLeft: 15,
        fontSize: 18,
        color: "#aaa",
        textDecorationLine: "line-through"
    },
    phoneDiscount: {
        paddingLeft: 15,
        fontSize: 18,
    },
    fastDeli: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        color: "#26bc4e"
    },
    text: {
        marginTop: 10,
        fontSize: 16
    }
})