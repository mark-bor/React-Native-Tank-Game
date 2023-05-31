import { useContext } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { ThemeContext } from "../../script/context";
import { styles } from "./styles";



export default function Tank({}) {
    const {theme} = useContext(ThemeContext);


    return (
        <View 
            style={[styles.tank, {
                left: theme.position.x, top: theme.position.y, 
                transform: [{rotate: `${theme.position.tankRotate}deg`}],
                backgroundColor: theme.tank.dark
            }]}>
            {/* <audio id="tank_motor_sound${tankId}" src="./Sounds/tank_motor.mp3" loop volume="0.3"></audio> */}
            {/* <audio id="tank_move_sound${tankId}" src="./Sounds/tank_move.mp3" loop volume="0.3"></audio> */}
            {/* <audio id="tower_rotate_sound${tankId}" src="./Sounds/tower_rotate.mp3" loop volume="0.3"></audio> */}
            {/* <audio id="tank_fire_sound${tankId}" src="./Sounds/tank_fire.mp3" loop volume="0.3"></audio> */}

            <View style={[styles.rotateTower, {transform: [{rotate: `${theme.position.towerRotate}deg`}]}]}>
                <ImageBackground style={[styles.tower, theme.tank.towerSize]} source={theme.tank.towerBackground}>
                    <View style={[styles.weapon, {backgroundColor: theme.tank.light}]}>
                        <View style={[styles.bullet]}></View>
                        <View style={styles.laser}>
                            <View style={[styles.beam]}></View>
                        </View>
                        <Image style={[styles.fireSmoke, {width: 26, height: 30}]} source={require('../../images/fire.png')} />
                    </View>

                    <View style={[styles.trapdoor, {backgroundColor: theme.tank.dark}]}></View>
                    
                    <ImageBackground style={styles.machineGun} source={theme.machineGun.onTower}>
                        <View style={styles.mgCartridge}></View>
                        <View style={styles.mgBullet}></View>
                        <Image style={[styles.fireSmoke, {width: 6, height: 10, top: '15%'}]} source={require('../../images/fire.png')} />
                    </ImageBackground>
                </ImageBackground>
            </View>
        </View>
    );
}