import React, {useState} from 'react';
import {
    View,
    Text, 
    TouchableOpacity, 
    StyleSheet,} from 'react-native';

const NumberGenerator = () => {

    const [number, setNumber] = useState(0);

    function handleNumber() {
        const newNumber = Math.floor(Math.random() * 1000);
        setNumber(newNumber);
    }

    return(
        <View>
            <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
            <TouchableOpacity onPress={handleNumber} style={styles.generator}>
                <Text>Clique Aqui</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#ff0503',
        fontSize: 24,
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    number:{
        color: '#ffffff',
        fontSize: 48,
        fontWeight: 'bold',
    },
    generator:{
        backgroundColor: '#ffffff',
        width: '60%',
        alignContent: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 15,
    },

});

export default NumberGenerator;
