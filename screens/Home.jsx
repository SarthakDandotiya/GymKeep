import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={globalStyles.container}>
                <Text style={globalStyles.text}>
                    Home Screen
                </Text>
            </View>
         );
    }
}
 
export default Home;