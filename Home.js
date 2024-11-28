import React from 'react';
import { Text, View, StyleSheet, SectionList, Button, Alert, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
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
        height: 250,
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: 'black',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({item, index, section}) => (
        item ? (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={() => {
                                  navigation.navigate('EditCurrency', {index:index, type: section.date , object: item});
                              }
                              }>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{item.country}</Text>
                    <Image source={item.image} />
                    <Text style={styles.textStyle}>{item.rate}</Text>
                </View>
            </TouchableOpacity>
        ) : null
    );

    console.log('CurrencyList:', CurrencyList);

    return (
        <View>
            <View style={styles.buttonContainer}>
                <StatusBar />
                <Button title="Add Item" onPress={() => navigation.navigate('AddPokemon')} />
            </View>
            <SectionList
                sections={CurrencyList || []}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (
                    section.title && <Text style={styles.headertext}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => item?.country + index}
            />
        </View>
    );
};

export default Home;
