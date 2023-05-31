import { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ThemeContext } from "../../script/context";
import { styles } from "./styles";



export default function Map({}) {
    const {theme} = useContext(ThemeContext);


    return (
        <View style={[styles.section, {height: Dimensions.get('window').height - 100}]}>
            <Text style={{margin: 70, color: theme.color}}>Map</Text>
        </View>
    );
}