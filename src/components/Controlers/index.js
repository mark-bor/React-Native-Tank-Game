import { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from "../../script/context";
import { 
    moveUp, moveDown,
    rotateTankLeft, rotateTankRight,
    rotateTowerLeft, rotateTowerRight
} from "../../script/index";
import { styles } from './styles';



export default function Controlers({navigation}) {
    const [laser, setLaser] = useState(false);
    const {theme, setTheme} = useContext(ThemeContext);


    return (
        <View style={styles.controlers}>
            <Ionicons 
                style={styles.openMenu} name='home' size={30} color='#051937' 
                onPress={() => {
                    setTheme({...theme, position: {...theme.position, x: 0, y: 130}})
                    navigation.navigate('Menu')
                }} 
            />

            <TouchableOpacity style={styles.laser} onPress={() => setLaser(!laser)}>
                <Image style={styles.openMenuImage} 
                    source={laser?
                        require('../../images/laser_active.png'):
                        require('../../images/laser.png')
                    } />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.blockingRotation} 
                onPress={() => setTheme({...theme, position: {...theme.position, blockRotation: !theme.position.blockRotation}})}>
                <Image style={styles.openMenuImage} 
                    source={theme.position.blockRotation?
                        require('../../images/bloked_rotate_active.png'):
                        require('../../images/bloked_rotate.png')
                    } />
            </TouchableOpacity>
            
            <View style={[styles.controlButtons, {left: 0}]}>
                <View style={styles.controlButtonsWrap}>
                    <TouchableOpacity style={styles.controlButton} onPress={() => moveUp(theme, setTheme)}>
                        <Image style={styles.arrowImage} source={require('../../images/arrow_up.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.controlButtonsWrap}>
                    <TouchableOpacity style={styles.controlButton} onPress={() => rotateTankLeft(theme, setTheme)}>
                        <Image style={styles.arrowImage} source={require('../../images/arrow_left.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.controlButton} onPress={() => rotateTankRight(theme, setTheme)}>
                        <Image style={styles.arrowImage} source={require('../../images/arrow_right.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.controlButtonsWrap}>
                    <TouchableOpacity style={styles.controlButton} onPress={() => moveDown(theme, setTheme)}>
                        <Image style={styles.arrowImage} source={require('../../images/arrow_down.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.tankInformation}>
                <View style={[styles.information, styles.mgInformation]}>
                    <Image style={styles.mgImage} source={require('../../images/machine-gun.png')} />
                    <Text style={[styles.bulletsQuantity, styles.mgBulletsQuantity]}>{'200'}/200</Text>
                    <View style={styles.remainder}></View>
                </View>
                <View style={[styles.information, styles.gunInformation]}>
                    <Image style={styles.gunImage} source={require('../../images/tank_turret.png')} />
                    <Text style={[styles.bulletsQuantity, styles.gunBulletsQuantity]}>{'20'}/20</Text>
                    <View style={styles.remainder}></View>
                </View>
            </View>
            
            <View style={[styles.controlButtons, {right: 0}]}>
                <View style={[styles.controlButtonsWrap, {justifyContent: 'flex-end'}]}>
                    <TouchableOpacity style={styles.controlButton}>
                        <Image style={styles.mgImage} source={require('../../images/machine-gun.png')} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.controlButtonsWrap}>
                    <TouchableOpacity style={styles.controlButton}>
                        <Image style={styles.gunImage} source={require('../../images/tank_turret.png')} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.controlButtonsWrap}>
                    <TouchableOpacity style={styles.controlButton} onPress={() => rotateTowerLeft(theme, setTheme)}>
                        <Image style={[styles.arrowImage, {height: '33%'}]} source={require('../../images/rotate_left.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.controlButton} onPress={() => rotateTowerRight(theme, setTheme)}>
                        <Image style={[styles.arrowImage, {height: '33%'}]} source={require('../../images/rotate_right.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}