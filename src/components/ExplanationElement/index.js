import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from './styles';



export default function ExplanationElement({image, text}) {
    return (
        <View style={styles.listElement}>
            <View style={styles.imageWrap}>
                <Image style={styles.image} source={image} />
            </View>
            <Text style={[styles.text, {paddingHorizontal: 7}]}> - </Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}