import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';

const data = require('../user.json');

import Facebook from "../images/facebook.png"
import Zalo from "../images/zalo.png"
import Google from "../images/google.png"

export default class Task4 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            username: "",
            password: "",
            data: [],
            borderBottomColorUn: "#aaa",
            labelTopUn: 20,
            labelLeftUn: 10,
            labelColorUn: "#000",
            borderBottomColorPw: "#aaa",
            labelTopPw: 20,
            labelLeftPw: 10,
            labelColorPw: "#000",
            errUn: 0,
            errPw: 0
        }
    }

    static navigationOptions = {
        header: null
    };

    saveData = async (id) => {
        await AsyncStorage.setItem('id', id);
    };

    componentDidMount = async() =>{
        this.setState({
            data: data
        })
    }

    onInputLabelPressed = () => {
        this.setState({ hidden:!this.state.hidden });
    };

    validate() {
        let { data } = this.state; 
        let user = data.users.find(user => user.name == this.state.username);
        if (!this.state.username) {
            this.setState({
                errUn: 1,
                // borderBottomColorUn: "#f00",
                // labelColorUn: "#f00"
            })
            if (!this.state.password) {
                this.setState({
                    errPw: 1,
                    // borderBottomColorPw: "#f00",
                    // labelColorPw: "#f00"
                })
            }
        }
        else {
            if (!user) {
                this.setState({
                    errUn: 2,
                    // borderBottomColorUn: "#f00",
                    // labelColorUn: "#f00"
                })
                return -1;
            }
            else {
                this.setState({errUn: 0})
                if (!this.state.password) {
                    this.setState({
                        errPw: 1,
                        // borderBottomColorPw: "#f00",
                        // labelColorPw: "#f00"
                    })
                    return -1;
                }
                else if (this.state.password !== user.pass) {
                    this.setState({
                        errPw: 2,
                        // borderBottomColorPw: "#f00",
                        // labelColorPw: "#f00"
                    })
                    return -1;
                }
                else {
                    this.setState({errPw: 0})
                }
            }
        }
        return user;
    }

    _handleFocusUn = () => {
        if (this.state.errUn == 0) {
            this.setState({
                borderBottomColorUn: "#00f",
                labelTopUn: -10,
                labelLeftUn: 0,
                labelColorUn: "#00f"
            })
        }
        else {
            this.setState({
                labelTopUn: -10,
                labelLeftUn: 0,
            })
        }
    }

    _handleBlurUn = () => {
        this.setState({
            borderBottomColorUn: "#aaa",
            labelTopUn: 15,
            labelLeftUn: 10,
            labelColorUn: "#000"
        })
        if (this.state.username) {
            this.setState({
                labelTopUn: -10,
                labelLeftUn: 0,
            })
        }
    }

    _handleFocusPw = () => {
        if (this.state.errPw == 0) {
            this.setState({
                borderBottomColorPw: "#00f",
                labelTopPw: -10,
                labelLeftPw: 0,
                labelColorPw: "#00f"
            })
        }
        else {
            this.setState({
                labelTopPw: -10,
                labelLeftPw: 0,
            })
        }
    }

    _handleBlurPw = () => {
        this.setState({
            borderBottomColorPw: "#aaa",
            labelTopPw: 15,
            labelLeftPw: 10,
            labelColorPw: "#000"
        })
        if (this.state.password) {
            this.setState({
                labelTopPw: -10,
                labelLeftPw: 0,
            })
        }
    }

    _success = async(id) => {
        await this.saveData(id);
        const { navigate } = this.props.navigation;
        await navigate('App', {id: id})
    }
    render(){
        const { borderBottomColorUn, labelTopUn, labelLeftUn, labelColorUn, borderBottomColorPw, labelTopPw, labelLeftPw, labelColorPw, errUn, errPw } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerBtn}>X</Text>
                    <Text style={styles.headerText}>Sign in / Sign up</Text>
                </View>
                <View style={styles.sign}>
                    <View style={styles.option}>
                        <Text style={styles.upperCase}>Sign in</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.upperCase}>Sign up</Text>
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <TextInput  style={[styles.input, {borderBottomColor: borderBottomColorUn}]}
                                onChangeText={(username) => this.setState({username})}
                                onFocus={this._handleFocusUn}
                                onBlur={this._handleBlurUn}
                                value={this.state.username}/>
                    { errUn == 1 ? <Text style={styles.warning}>Username is required!</Text> : errUn == 2 ? <Text style={styles.warning}>Username does not exist!</Text> : <Text></Text>}
                    <Text style={[styles.textInputPlh, {top: labelTopUn, left: labelLeftUn, color: labelColorUn}]} disabled>Username</Text>
                    <View style={styles.pwInput}>
                        <TextInput  style={[styles.input, {borderBottomColor: borderBottomColorPw}]} 
                                    secureTextEntry={this.state.hidden}
                                    onChangeText={(password) => this.setState({password})}
                                    onFocus={this._handleFocusPw}
                                    onBlur={this._handleBlurPw}
                                    value={this.state.password}/>
                        { errPw == 1 ? <Text style={styles.warning}>Password is required!</Text> : errPw == 2 ? <Text style={styles.warning}>Wrong password!</Text> : <Text></Text> }
                        <Text style={[styles.textInputPlh, {top: labelTopPw, left: labelLeftPw, color: labelColorPw}]} disabled>Password</Text>
                        <TouchableOpacity onPress={this.onInputLabelPressed} style={styles.shstate}>
                            <Text>{this.state.hidden ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity   
                        style={styles.btnContainer} 
                        onPress={() => 1===1
                            // ? navigate('App', {id: this.validate().id}) 
                            ? this._success(this.validate().id)
                            : this.validate()}>
                   <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgetContainer}>
                    <Text style={styles.forget}>Forget password?</Text>
                </TouchableOpacity>
                <View style={styles.otherWays}>
                    <Text style={{fontSize: 16}}>Or log in with</Text>
                    <View style={styles.ways}>
                        <TouchableOpacity style={[styles.way, {backgroundColor: "#024478"}]}>
                            <View style={styles.imgContainer}>
                                <Image style={styles.img} source={Facebook} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.way, {backgroundColor: "#2c8cd8"}]}>
                            <View style={styles.imgContainer}>
                                <Image style={styles.img} source={Zalo} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.way, {backgroundColor: "#fff"}]}>
                            <View style={styles.imgContainer}>
                                <Image style={styles.img} source={Google} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "rgb(33, 150, 243)",
        height: 50,
        alignItems: "center",
    },
    headerBtn: {
        flex: 1,
        color: "#fff",
        textAlign: "center",
        fontSize: 20
    },
    headerText: {
        flex: 5,
        color: "#fff",
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: "700"
    },
    sign: {
        flexDirection: "row"
    },
    option: {
        flex: 1,
        backgroundColor: "#eee"
    },
    upperCase: {
        textTransform: "uppercase",
        paddingVertical: 15,
        fontSize: 20,
        textAlign: "center"
    },
    inputBlock: {
        marginHorizontal: 30,
        marginTop: 20
    },
    input: {
        marginBottom: 25,
        // borderBottomColor: "#aaa",
        borderBottomWidth: 1,
        fontSize: 16,
    },
    pwInput: {
        position: "relative"
    },
    textInputPlh: {
        position: "absolute",
        // top: 15,
        // left: 10,
        fontSize: 18
    },
    warning: {
        color: "#f00",
        fontWeight: "500"
    },
    shstate: {
        position: "absolute",
        bottom: "50%",
        right: 0
    },
    btnContainer: {
        height: 60,
        marginTop: 20,
        marginHorizontal: 30,
        backgroundColor: '#f00',
        justifyContent: "center",
        alignItems: "center",
    },
    loginText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16
    },
    forgetContainer: {
        flex: 1,
        marginHorizontal: 30,
        marginTop: 30,
        alignItems: "center",
    },
    forget: {
        color: "blue",
        fontSize: 16
    },
    otherWays: {
        marginHorizontal: 30,
        marginTop: 50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ways: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10
    },
    way: {
        flex: 1,
        height: 50,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        marginHorizontal: 2
    },
    imgContainer: {
        
    },
    img: {
        width: 24,
        height: 24
    }
});
