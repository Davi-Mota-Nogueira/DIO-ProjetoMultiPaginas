import React from "react";
import {
    View, 
    Image, 
    Text,
    StyleSheet,
    StatusBar,
    Pressable,
    Linking
  } from "react-native";

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkerGitHub = '#4F565E';

const imageProfile = 'https://avatars.githubusercontent.com/u/46698426?v=4';
const urlGitHub = 'https://github.com/Davi-Mota-Nogueira';
const urlLinkedIn = 'https://linkedin.com/in/davimnogueira/';
const urlDIO = 'https://web.dio.me/users/davidamota_nogueira';

const CV = () => {

    const handlePressGoToGitHub = async ()=>{
        const res = await Linking.openURL(urlGitHub);
        if(res) {await Linking.openURL(urlGitHub)};
    };
    const handlePressGoToLinkedIn = async ()=>{
        const res = await Linking.openURL(urlLinkedIn);
        if(res) {await Linking.openURL(urlLinkedIn)};
    };
    const handlePressGoToDIO = async ()=>{
        const res = await Linking.openURL(urlDIO);
        if(res) {await Linking.openURL(urlDIO)};
    };
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
            <View style={styles.content}>
                <Image
                source={{uri: imageProfile}} 
                style={styles.avatar} 
                accessibilityLabel='Davi in the bedroom with loose hair.'/>
                <Text style={[styles.defaultText, styles.name]}>Davi da Mota Nogueira</Text>
                <Text style={[styles.defaultText, styles.nickname]}>Davi-Mota-Nogueira</Text>
                <Text style={[styles.defaultText, styles.descriprion]}>Sou estudante de Engenharia da Computação pela UPE-POLI.</Text>
            </View>
            <Pressable onPress={handlePressGoToGitHub} onLongPress={()=>alert("Options on how to open GitHub page", "Just click one time on the button.")}>
                <View style={[styles.button]}>
                    <Text style={[styles.defaultText, styles.textButton]}>Open in GitHub</Text>
                </View>
            </Pressable>
            <Pressable onPress={handlePressGoToLinkedIn} onLongPress={()=>alert("Options on how to open LinkedIn page", "Just click one time on the button.")}>
                <View style={[styles.button]}>
                    <Text style={[styles.defaultText, styles.textButton]}>Open LinkedIn</Text>
                </View>
            </Pressable>
            <Pressable onPress={handlePressGoToDIO} onLongPress={()=>alert("Options on how to open DIO page", "Just click one time on the button.")}>
                <View style={[styles.button]}>
                    <Text style={[styles.defaultText, styles.textButton]}>Open DIO</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: colorGitHub,
        flex: 1, //Tela inteira
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
    },
    defaultText:{
        color: colorFontGitHub,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkerGitHub,
    },
    descriprion: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: colorDarkerGitHub,
        borderRadius: 15,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CV;
