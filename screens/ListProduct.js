import React, { Component } from 'react'
import { View, StyleSheet } from "react-native"
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import ListProductHeader from "../components/ListProductHeader"
import SortBySelling from '../components/SortBySelling'
import DeliTo from "../components/DeliTo" 
import PhoneInfo from '../components/PhoneInfo'

import Vsmart from '../images/vsmart.jpg'
import VsmartF from '../images/vsmart-front.jpg'
import VsmartB from '../images/vsmart-behind.jpg'
import VsmartS from '../images/vsmart-side.jpg'
import VsmartLR from '../images/vsmart-lr.jpg'

import IPhone from '../images/iphone.jpg'
import IPhoneF from '../images/iphone-front.jpg'
import IPhoneB from '../images/iphone-behind.jpg'
import IPhoneS from '../images/iphone-side.jpg'
import IPhoneLR from '../images/iphone-lr.jpg'

import Samsung from '../images/samsung.jpg'
import SamsungF from '../images/samsung-front.jpg'
import SamsungB from '../images/samsung-behind.jpg'
import SamsungS from '../images/samsung-side.jpg'
import SamsungLR from '../images/samsung-lr.jpg'

import Cart from "../images/shopping-cart.png"

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Điện thoại VSmart Live (64GB/6GB)",
                    price: "3.299.000",
                    oldPrice: "9.000.000",
                    discount: "58",
                    listImg: [
                        {
                            img: Vsmart,
                            isChosen: true
                        },
                        {
                            img: VsmartF,
                            isChosen: false
                        },
                        {
                            img: VsmartB,
                            isChosen: false
                        },
                        {
                            img: VsmartS,
                            isChosen: false
                        },
                        {
                            img: VsmartLR,
                            isChosen: false
                        }
                    ],
                    description: "Điện Thoại Vsmart Live với 3 camera đẳng cấp, cảm biến vân tay dưới màn hình cùng hiệu năng xuất sắc, Vsmart Live mang đến cho bạn cuộc sống phong cách và đầy bứt phá.",
                    comment: 241,
                },
                {
                    id: 2,
                    name: "Điện thoại iPhone XS 64GB",
                    price: "31.490.000",
                    oldPrice: "90.122.000",
                    discount: "7",
                    listImg: [
                        {
                            img: IPhone,
                            isChosen: true
                        },
                        {
                            img: IPhoneF,
                            isChosen: false
                        },
                        {
                            img: IPhoneB,
                            isChosen: false
                        },
                        {
                            img: IPhoneS,
                            isChosen: false
                        },
                        {
                            img: IPhoneLR,
                            isChosen: false
                        }
                    ],
                    description: "Điện thoại iPhone 11 Pro Max là phiên bản cao cấp nhất của iPhone năm nay. Sản phẩm có nhiều cải tiến nổi bật, hiệu năng, thiết kế mới đặc biệt ở phần mặt lưng và hệ thống camera.",
                    paySup: true,
                    comment: 63
                },
                {
                    id: 3,
                    name: "Điện thoại Samsung Galaxy M30s (64GB/4GB) ",
                    price: "5.490.000",
                    oldPrice: "12.212.000",
                    discount: "21",
                    listImg: [
                        {
                            img: Samsung,
                            isChosen: true
                        },
                        {
                            img: SamsungF,
                            isChosen: false
                        },
                        {
                            img: SamsungB,
                            isChosen: false
                        },
                        {
                            img: SamsungS,
                            isChosen: false
                        },
                        {
                            img: SamsungLR,
                            isChosen: false
                        }
                    ],
                    description: "Samsung Galaxy M30s là chiếc smartphone đầu tiên của Samsung với dung lượng pin 6000mAh giúp bạn  tha hồ sử dụng điện thoại suốt cả ngày dài mà không lo bị gián đoạn vì hết pin.",
                    paySup: true,
                    comment: 69
                },
                {
                    id: 4,
                    name: "Điện thoại iPhone 11 Pro Max 64GB",
                    price: "31.490.000",
                    oldPrice: "56.120.000",
                    discount: "7",
                    listImg: [
                        {
                            img: IPhone,
                            isChosen: true
                        },
                        {
                            img: IPhoneF,
                            isChosen: false
                        },
                        {
                            img: IPhoneB,
                            isChosen: false
                        },
                        {
                            img: IPhoneS,
                            isChosen: false
                        },
                        {
                            img: IPhoneLR,
                            isChosen: false
                        }
                    ],
                    description: "Điện thoại iPhone 11 Pro Max là phiên bản cao cấp nhất của iPhone năm nay. Sản phẩm có nhiều cải tiến nổi bật, hiệu năng, thiết kế mới đặc biệt ở phần mặt lưng và hệ thống camera.",
                    paySup: true,
                    comment: 63
                },
            ]
        }
    }

    static navigationOptions = {
        headerTitle: () => <ListProductHeader/>
    };
    
    handlePress = data => {
        const { navigate } = this.props.navigation;
        navigate("PhoneDetail", {data: data})
    }
    
    render() {
        const { products } = this.state;
        return (
            <ScrollView>
                <SortBySelling/>
                <DeliTo/>
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