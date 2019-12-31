import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Task2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const data = this.props;
        return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.lgImgContainer}>
                <Image style={styles.lgImg} source={data.lgImg}></Image>
                <TouchableOpacity style={styles.info}>
                    <Image style={styles.smImg} source={data.smImg}></Image>
                    <Text style={styles.name}>{data.name}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.titleContainer, styles.text}>{data.title}</Text>
                <Text style={[styles.text, {color: "grey"}]}>Share to earn</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    lgImgContainer: {
        position: "relative",
        borderRadius: 20,
        overflow: "hidden"
    },
    lgImg: {
        width: "100%",
        height: 250
    },
    info: {
        position: "absolute",
        bottom: 10,
        left: 15,
        flexDirection: "row"
    },
    smImg: {
        width: 50,
        height: 50,
        borderRadius: 999
    },
    name: {
        height: "100%", 
        paddingLeft: 10,
        paddingVertical: 15,
        color: "black",
        fontSize: 20,
        fontWeight: "700"
    },
    titleContainer: {
        paddingVertical: 5,
        paddingLeft: 20,
    },  
    text: {
        fontSize: 20,
        paddingVertical: 10
    }
});
