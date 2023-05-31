import { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Weapon, Map, ButtonConfirmTank, ButtonConfirmMG } from '../../components/index';
import { TANKS, MACHINE_GUNS } from "../../data/index";
import { ThemeContext } from "../../script/context";
import { styles } from "./styles";



export default function Menu({navigation}) {
    const [section, setSection] = useState('tank');
    const {theme} = useContext(ThemeContext);


    return (
        <View style={styles.menu}>
            <View style={styles.header}>
                <Ionicons 
                    name='settings-outline' size={23} color='#F5F5F5' 
                    onPress={() => navigation.navigate('Settings')} 
                />
                <Ionicons 
                    name='information-circle-outline' size={25} color='#F5F5F5' 
                    onPress={() => navigation.navigate('Explanation')} 
                />
            </View>

            {section==='tank' ? 
                <Weapon wepons={TANKS} wepon={theme.tank} ConfirmWepon={ButtonConfirmTank} /> 
            : null}

            {section==='machineGun' ? 
                <Weapon wepons={MACHINE_GUNS} wepon={theme.machineGun} ConfirmWepon={ButtonConfirmMG}  /> 
            : null}
            
            {section==='map' ? <Map /> : null}

            <View style={styles.footer}>
                <TouchableOpacity 
                    style={[styles.footerButton, {opacity: section==='tank' ? 0.3 : 1}]} 
                    onPress={() => setSection('tank')}>
                    <Text style={{color: '#F5F5F5', fontSize: 20}}>Tank</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.footerButton, {opacity: section==='machineGun' ? 0.3 : 1}]} 
                    onPress={() => setSection('machineGun')}>
                    <Text style={{color: '#F5F5F5', fontSize: 20}}>Machine Gun</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.footerButton, {opacity: section==='map' ? 0.3 : 1}]} 
                    onPress={() => setSection('map')}>
                    <Text style={{color: '#F5F5F5', fontSize: 20}}>Map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Game')}>
                    <Text style={{color: '#8FD855', fontSize: 20}}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}