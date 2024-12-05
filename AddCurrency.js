import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { CurrencyList } from './Data';

const AddCurrency = ({ navigation }) => {
    const [CurrencyName, setCurrencyName] = useState('');
    const [CurrencyImage, setCurrencyImage] = useState('https://flagpedia.net/data/flags/w160/th.webp');
    const [rate, setRate] = useState();
    const [area, setArea] = useState('Europe');

    const handleSubmit = () => {
        if (!CurrencyName || !CurrencyImage || !rate) {
            Alert.alert("Error", "Please fill out all fields with valid data.");
            return;
        }

        const newCurrency = {
            country: CurrencyName,
            image: CurrencyImage,
            rate: rate,
        };

        let indexnum = area === "Asia" ? 1 : 0;
        CurrencyList[indexnum].data.push(newCurrency);
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Currency Name:</Text>
            <TextInput
                style={styles.input}
                value={CurrencyName}
                onChangeText={setCurrencyName}
                placeholder="Enter Currency Name"
            />
            <Text style={styles.label}>Currency Image URL:</Text>
            <TextInput
                style={styles.input}
                value={CurrencyImage}
                onChangeText={setCurrencyImage}
                placeholder="Enter Currency Image URL"
            />
            <Text style={styles.label}>Currency Rate:</Text>
            <TextInput
                style={styles.input}
                value={rate}
                onChangeText={(text) => setRate(parseFloat(text) || '')}
                placeholder="Enter rate"
            />
            <Text style={styles.label}>Area:</Text>
            <RNPickerSelect
                onValueChange={setArea}
                value={area}
                items={[
                    { label: 'Europe', value: 'Europe' },
                    { label: 'Asia', value: 'Asia' },
                ]}
            />
            <Button title="Submit" onPress={handleSubmit} />
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
});

export default AddCurrency;
