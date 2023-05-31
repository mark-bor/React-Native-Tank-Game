import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ExplanationArticle, ExplanationElement } from '../../components/index';
import { styles } from "./styles";



export default function Explanation({navigation}) {
    const [article, setArticle] = useState('');

    
    return (
        <View style={styles.wrap}>
            <Ionicons 
                style={styles.close} 
                name='arrow-back-circle-outline' size={27} color='#FF5555'
                onPress={() => navigation.navigate('Menu')} 
            />

            <Text style={[styles.title, {fontSize: 23}]}>Explanation</Text>
            <Text style={[styles.title, {fontSize: 17}]}>Tap the desire area</Text>

            <TouchableOpacity 
                style={{position: 'absolute', bottom: 0, left: 0}} 
                onPress={() => setArticle('Driving on a tank')}>
                <Image style={styles.image} source={require('../../images/left_control.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={{position: 'absolute', bottom: 0, right: 0}} 
                onPress={() => setArticle('Tower rotation and fire')}>
                <Image style={styles.image} source={require('../../images/right_control.png')} />
            </TouchableOpacity>

            {article==='Driving on a tank' ?
                <ExplanationArticle 
                    image={require('../../images/left_control.png')} 
                    article={article}
                    setArticle={setArticle}>
                    <ExplanationElement 
                        image={require('../../images/arrow_up.png')}
                        text={'Tank move straight'} />
                    <ExplanationElement 
                        image={require('../../images/arrow_down.png')}
                        text={'Tank move back'} />
                    <ExplanationElement 
                        image={require('../../images/arrow_left.png')}
                        text={'Tank rotate to left'} />
                    <ExplanationElement 
                        image={require('../../images/arrow_right.png')}
                        text={'Tank rotate to right'} />
                </ExplanationArticle>
            : null}
            
            {article==='Tower rotation and fire' ?
                <ExplanationArticle 
                    image={require('../../images/right_control.png')} 
                    article={article}
                    setArticle={setArticle}>
                    <ExplanationElement 
                        image={require('../../images/rotate_left.png')}
                        text={'Tower rotate to left'} />
                    <ExplanationElement 
                        image={require('../../images/rotate_right.png')}
                        text={'Tower rotate to right'} />
                    <ExplanationElement 
                        image={require('../../images/tank_turret.png')}
                        text={'Fire from machine big gun'} />
                    <ExplanationElement 
                        image={require('../../images/machine-gun.png')}
                        text={'Fire from machine gun'} />
                </ExplanationArticle>
            : null}
        </View>
    );
}