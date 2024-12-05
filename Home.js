import React, {useState} from 'react';
import {Text, View, StyleSheet, SectionList, Button, Image, TouchableOpacity, StatusBar} from 'react-native';

import { CurrencyList } from './Data';

const styles = StyleSheet.create({
    headertext: {
        fontSize: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },

    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
    },
    imageStyle: {
        height: 100,
        width: '40%',
        resizeMode: 'stretch',
        backgroundColor: 'black',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => navigation.navigate('EditCurrency', {
                    index: index,
                    type: section.area,
                    object: item
                })}
            >
                <View style={styles.container}>
                    <Image source={{uri: item.image}} style={styles.imageStyle}/>
                    <Text style={styles.textStyle}>{item.country}</Text>
                    <Text style={styles.textStyle}>{item.rate}</Text>
                </View>
            </TouchableOpacity>
        )};

    return (
        <View style={{flex: 1}}>

            <View style={styles.buttonContainer}>
                <StatusBar />
                <Button title="Currency Calculator" onPress={() => navigation.navigate('Calculator')} />
                <Text></Text>
                <Button title="Add Currency" onPress={() => navigation.navigate('AddCurrency')} />
            </View>
            <SectionList contentContainerStyle={{padding:20}}
                sections={CurrencyList}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.headertext}>{section.area}</Text>
                )}
            />
        </View>
    );
};

export default Home;
