import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import CheckBox from 'react-native-check-box'

import Location from "../images/location.png"
import Tiki from "../images/tiki-now.png"

export default class DeliTo extends Component {

    state = {
        isChecked: false
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.locateCtn}>
                    <Image style={styles.locateIcon} source={Location}/>
                    <TouchableOpacity>
                        <Text style={styles.location}>P.Linh Chiểu, Q.Thủ Đức</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkTikiCtn}>
                    <TouchableOpacity>
                        <Image resizeMode="stretch" style={styles.tikiIcon} source={Tiki}/>
                    </TouchableOpacity>
                    <CheckBox
                        onClick={()=>{
                            this.setState({
                                isChecked:!this.state.isChecked
                            })
                        }}
                        isChecked={this.state.isChecked}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        padding: 15
    },
    locateIcon: {
        width: 28,
        height: 28,
        marginRight: 10
    },
    locateCtn: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center"
    },
    location: {
        fontSize: 17
    },
    textBlue: {
        color: "#189eff",
    },
    checkTikiCtn: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    tikiIcon: {
        marginRight: 10
    }
})