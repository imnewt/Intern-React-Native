import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Task3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const data = this.props;
        return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.lgImgContainer}>
                <Image style={styles.lgImg} source={data.lgImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.titleContainer, styles.text}>{data.title}</Text>
                <Text style={[styles.text, {color: "grey"}]}>Share to earn</Text>
                <View style={styles.info}>
                    <Image style={styles.smImg} source={data.smImg}></Image>
                    <Text style={styles.name}>{data.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 100,
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    lgImgContainer: {
        flex: 1,
        overflow: "hidden",
        borderRadius: 20
    },
    lgImg: {
        width: "100%",
        height: "100%"
    },
    info: {
        flexDirection: "row",
        paddingTop: 5
    },
    smImg: {
        width: 24,
        height: 24,
        borderRadius: 999
    },
    name: {
        height: "100%", 
        paddingLeft: 10,
        color: "black",
        fontWeight: "600"
    },
    titleContainer: {
        flex: 3,
        paddingLeft: 10,
        paddingTop: 10
    },  
    text: {
        fontSize: 16,
        paddingTop: 5
    }
});
