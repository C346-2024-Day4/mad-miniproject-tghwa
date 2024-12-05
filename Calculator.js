import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { CurrencyList } from './Data';

const styles = StyleSheet.create({
    headertext: {
        fontSize: 20,
        marginHorizontal: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 20,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    image: {
        height: 160,
        width: '80%',
        resizeMode: 'stretch',
        backgroundColor: 'black',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        alignSelf: 'center',
    },
    container: {
        justifyContent: 'center',
        padding: 20,

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
    calculator: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    field: {
        marginHorizontal: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    pickerWrapper: {
        flex: 1,
        marginLeft: 10,
    },
    resultText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
    },
});

const Calculator = ({ navigation }) => {
    const [amount, setAmount] = useState();
    const [selectedCurrency, setSelectedCurrency] = useState('British Pound');


    const items = [];
    for (let section of CurrencyList) {
        for (let currency of section.data) {
            items.push({
                label: currency.country,
                value: currency.rate,
            });
        }
    }


    const calculatedAmount = amount ? (amount * selectedCurrency).toFixed(2) : 0;

    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>Currency Calculator</Text>
            <Image source={{uri: "https://flagpedia.net/data/flags/w160/sg.webp"}} style={styles.image}/>
            <View style={styles.calculator}>
                <View style={styles.field}>
                    <Text style={{ fontWeight: 'bold'}}>SGD</Text>
                </View>
                <Text>to</Text>
                <View style={styles.pickerWrapper}>
                    <RNPickerSelect
                        onValueChange={setSelectedCurrency}
                        value={selectedCurrency}
                        items={items}
                    />
                </View>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={amount}
                    onChangeText={(text) => setAmount(parseFloat(text) || '')}
                    placeholder="Enter SGD amount..."
                />
                <Text style={styles.resultText}>
                    {amount ? `${calculatedAmount}` : 'Enter an amount to calculate'}
                </Text>
            </View>


        </View>
    );
};

export default Calculator;
