import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-range-slider-expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from "./styles";



export default function Settings({navigation}) {
    const [music, setMusic] = useState(50);
    const [game, setGame] = useState(50);


    return (
        <View style={styles.settings}>
            <Ionicons 
                style={styles.close} 
                name='arrow-back-circle-outline' size={27} color='#FF5555'
                onPress={() => navigation.navigate('Menu')} 
            />
            
            <Text style={styles.title}>Settings</Text>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Music</Text>

                {/* <audio id="music_one" src="./Sounds/Creedence_Clearwater_Revival-Fortunate_Son.mp3"></audio>
                <audio id="music_two" src="./Sounds/Jefferson_Airplane-Somebody_To_Love.mp3"></audio>
                <audio id="music_three" src="./Sounds/James_Brown-I_Got_You_(I Feel Good).mp3"></audio> */}

                <View style={styles.generalSoundControl}>
                    <Slider 
                        containerStyle={{padding: 0, display: 'flex', justifyContent: 'center'}}
                        min={0} max={100} step={5}
                        initialValue={music} valueOnChange={setMusic}
                        styleSize={17} showRangeLabels={false}
                        outOfRangeBarColor='#00A2FF' inRangeBarColor='#646464'
                    />
                    <Text style={{color: '#F5F5F5', fontSize: 18}}>{music}</Text>
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Game</Text>

                <View style={styles.generalSoundControl}>
                    <Slider 
                        containerStyle={{padding: 0, display: 'flex', justifyContent: 'center'}}
                        min={0} max={100} step={1}
                        initialValue={game} valueOnChange={setGame}
                        styleSize={17} showRangeLabels={false}
                        outOfRangeBarColor='#00A2FF' inRangeBarColor='#646464'
                    />
                    <Text style={{color: '#F5F5F5', fontSize: 18}}>{game}</Text>
                </View>
            </View>
        </View>
    );
}