import React, { useState } from 'react';
import {Button, Text, TextInput, View, Alert, StyleSheet, Image} from 'react-native';
import {CurrencyList} from "./Data";

const EditCurrency = ({navigation, route}) => {

    const country = route.params.object;
    const [rate, setRate] = useState(country.rate);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Currency Name: {country.country}</Text>
            <Image source={{uri: country.image}} style={styles.imageStyle}/>
            <Text style={styles.label}>Currency Rate:</Text>
            <TextInput
                style={styles.input}
                value={rate}
                onChangeText={setRate}
                placeholder="Enter rate..."
            />r
            <View style={{flexDirection: 'row'}}>
                <View style={{margin:10, flex:1}}>
                    <Button title="Save" onPress={() => {
                        let indexnum = CurrencyList.findIndex(item => item.area === route.params.type);

                        const updatedRate = {
                            ...country, // Preserve other properties (if any)
                            rate: rate,
                        };

                        CurrencyList[indexnum].data[route.params.index] = updatedRate;

                        navigation.navigate("Home");
                    }
                    }/>
                </View>
                <View style={{margin:10, flex:1}}>
                    <Button title="Delete" onPress={()=>{
                        let indexnum = CurrencyList.findIndex(item => item.area === route.params.type);

                        Alert.alert("Are you sure?",'',
                            [{text:'Yes', onPress:() => {
                                    CurrencyList[indexnum].data.splice(route.params.index, 1);
                                    navigation.navigate("Home");
                                }},
                                {text: 'No'}])
                    }
                    }/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
        padding: 5,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 25,
        paddingLeft: 15,
        marginBottom: 20,
        fontSize: 18,
        backgroundColor: 'white',
    },
    imageStyle: {
        height: 125,
        width: '50%',
        resizeMode: 'stretch',
        backgroundColor: 'black',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 20,
    },
});

export default EditCurrency;
