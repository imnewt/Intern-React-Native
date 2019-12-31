// import React from 'react';
// import { AsyncStorage } from 'react-native';

// import {
//   View,
//   Text,
// } from 'react-native';

// export default class Storage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userID: ''
//         }
//     }

//     static navigationOptions = {
//         title: 'Storage',
//     };

//     _retrieveData = async () => {
//         try {
//           const value = await AsyncStorage.getItem('id');
//           const { navigate } = this.props.navigation;
//           if (value) {
//             navigate("Profile", {id: value})
//           }
//           else {
//             navigate("Task4")
//           }
//         } catch (error) {
//         }
//     };

//     componentDidMount = () => {
//         const { navigation } = this.props;
//         const id = navigation.getParam('id', 'nothing here');
//         this.setState({
//             UserId: id
//         })
//     }

//     render(){
//         const { userID } = this.state;
//         return (
//             <View>
//                 <Text>{userID}</Text>
//             </View>
//         )
//     }
// }