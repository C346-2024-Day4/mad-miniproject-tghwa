import React, { useState } from 'react';
import {Button, Text, TextInput, View, Alert, StyleSheet, Image} from 'react-native';
import {CurrencyList} from "./Data";

const EditCurrency = ({navigation, route}) => {

    const country = route.params.object;
    const [currency, setCurrency] = useState(country.currency);

    return (
        <View style={styles.container}>
            <Image source={{uri: country.image}} />
            <Text style={styles.label}>Country: {country.name}</Text>

            <Text style={styles.label}>Currency:</Text>
            <TextInput
                style={styles.input}
                value={currency}
                onChangeText={setCurrency}
                placeholder="Enter currency..."
            />
            <View style={{flexDirection: 'row'}}>
                <View style={{margin:10, flex:1}}>
                    <Button title="Save" onPress={() => {
                        let indexnum = 0
                        if (route.params.type === "1 December 2024") {
                            indexnum = 1;
                        } else if (route.params.type === '2 December 2024') {
                            indexnum = 2;
                        }
                        const updatedCurrency = {
                            ...country, // Preserve other properties (if any)
                            country: CountryName,
                            image: CountryImage,
                            currency: CountryCurrency,
                        };

                        CurrencyList[indexnum].data[route.params.index] = updatedCurrency;

                        navigation.navigate("Home");
                    }
                    }/>
                </View>
                <View style={{margin:10, flex:1}}>
                    <Button title="Delete" onPress={()=>{
                        let indexnum = 0
                        if (route.params.type === "1 December 2024") {
                            indexnum = 1;
                        } else if (route.params.type === '2 December 2024') {
                            indexnum = 2;
                        }
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
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});

export default EditCurrency;
