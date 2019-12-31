import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class Task1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const data = this.props;
        return (
        <View style={styles.container}>
            <View style={styles.leftBlock}>
                <View style={styles.iconBlock}>
                    <View style={styles.iconContainer}>
                        <Image source={data.iconUrl} style={styles.icon} />
                    </View>
                    {   
                        data.lastChild !== true &&
                        <View style={styles.line}>
                            <View style={styles.text}></View>
                        </View> 
                    }
                </View>
            </View>
            <View style={styles.rightBlock}>
                <Text style={styles.header}>{data.header}</Text>
                <Text>{data.content}</Text>
                { data.note && <Text style={styles.note}>{data.note}</Text> }
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    leftBlock: {
        flex: 1
    },
    iconBlock: {
        flex: 1
    },  
    iconContainer: {
        backgroundColor: "lightblue",
        borderRadius: 9999,
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: 'center',
    },
    icon: {
        width: 28,
        height: 28,
    },
    line: {
        height: "100%", 
        width: "100%",
        position: "relative"
    },
    text: {
        position: "absolute",
        left: "39%",
        backgroundColor: "black",
        width: 1,
        height: "100%"
    },
    rightBlock: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flex: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: "#aeaeae",
        borderBottomWidth: 1
    },
    header: {
        fontWeight: "700",
        paddingVertical: 5,
        fontSize: 16
    },
    note: {
        color: "#999"
    }
});
