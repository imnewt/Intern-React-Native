import React, { Component } from 'react'
import { View, StyleSheet } from "react-native"
import { FlatList } from 'react-native-gesture-handler';

import PhoneInfo from '../components/PhoneInfo';

import Vsmart from '../images/vsmart.jpg';
import VsmartF from '../images/vsmart-front.jpg';
import VsmartB from '../images/vsmart-behind.jpg';
import VsmartTB from '../images/vsmart-tb.jpg';
import VsmartLR from '../images/vsmart-lr.jpg';
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
                    oldPrice: "9.000.000",
                    discount: "58",
                    listImg: [Vsmart,VsmartF,VsmartB,VsmartTB,VsmartLR],
                    //img: Vsmart,
                    description: "Điện Thoại Vsmart Live với 3 camera đẳng cấp, cảm biến vân tay dưới màn hình cùng hiệu năng xuất sắc, Vsmart Live mang đến cho bạn cuộc sống phong cách và đầy bứt phá.",
                    comment: 241,
                    //imgFront: VsmartF,
                    //imgBehind: VsmartB,
                    //imgTB: VsmartTB,
                    //imgLR: VsmartLR
                },
                {
                    id: 2,
                    name: "Điện thoại iPhone 11 Pro Max 64GB",
                    price: "31.490.000",
                    oldPrice: "90.122.000",
                    discount: "7",
                    //img: IPhone,
                    listImg: [Vsmart,VsmartF,VsmartB,VsmartTB,VsmartLR],
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
                    //img: Samsung,
                    listImg: [Vsmart,VsmartF,VsmartB,VsmartTB,VsmartLR],
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
                    //img: IPhone,
                    listImg: [Vsmart,VsmartF,VsmartB,VsmartTB,VsmartLR],
                    description: "Điện thoại iPhone 11 Pro Max là phiên bản cao cấp nhất của iPhone năm nay. Sản phẩm có nhiều cải tiến nổi bật, hiệu năng, thiết kế mới đặc biệt ở phần mặt lưng và hệ thống camera.",
                    paySup: true,
                    comment: 63
                },
            ]
        }
    }

    static navigationOptions = {
        title: 'Products',
    };
    
    handlePress = data => {
        const { navigate } = this.props.navigation;
        //console.log(data);
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