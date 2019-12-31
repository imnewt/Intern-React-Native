import React from 'react';

import {
  View,
  Text,
  Button,
  AsyncStorage
} from 'react-native';

const data = require('../user.json');

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user: {}
        }
    }

    static navigationOptions = {
        title: 'Profile',
    };

    componentDidMount = async () => {
        await this.setState({
            data: data
        })
        const { navigation } = this.props;
        const id = navigation.getParam('id','nothing here')
        const user = await this.state.data.users.find(user => user.id === id);
        this.setState({
            user: user
        })
    }

    logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render(){
        const { user } = this.state;
        return (
            <View>
                <View>
                    <Text>{user.id}</Text>
                    <Text>{user.name}</Text>
                    <Text>{user.pass}</Text>
                    <Text>{user.tel}</Text>
                </View> 
                <Button
                    title="Log out"
                    onPress={this.logOut}
                />
            </View>
        )
    }
}