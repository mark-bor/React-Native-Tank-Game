import { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from "../../script/context";
import { styles } from "./styles";



export default function ButtonConfirmTank({choose}) {
    const {theme, setTheme} = useContext(ThemeContext);


    return (
        <TouchableOpacity style={styles.button} onPress={() => setTheme({...theme, tank: {...choose}})}>
            <LinearGradient
                colors={['#A1BEEA', '#457FD6']} style={styles.buttonBorder}
                start={{x: 0, y: 0}} end={{x: 0, y: 0.6}}
            >
                <LinearGradient
                    colors={['#457FD6', '#A1BEEA']} style={styles.buttonBackground}
                    start={{x: 0, y: 0}} end={{x: 0, y: 0.6}}
                >
                    <Text style={{color: '#051937',}}>Confirm</Text>
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>
    );
}