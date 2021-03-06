/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import weatherStore from './src/services/stores/WeatherStore'
import { Provider } from 'mobx-react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './src/views/Main'

const AppNavigator = createStackNavigator({
    Home: Main,
});

const AppContainer = createAppContainer(AppNavigator);

class App  extends React.Component {
    render(){
        return (
        <Provider weatherStore={weatherStore}>
            <StatusBar hidden/>
            <AppContainer/> 
        </Provider>
        )
    }
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter
    },
    engine: {
        position: 'absolute',
        right: 0
    },
    body: {
        backgroundColor: Colors.white
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark
    },
    highlight: {
        fontWeight: '700'
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right'
    }
});

export default App;
