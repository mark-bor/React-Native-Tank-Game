import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { ExplanationElement } from '../ExplanationElement/index';
import { styles } from './styles';



export default function ExplanationArticle({image, children, article, setArticle}) {
    return (
        <View style={styles.explanationArticle}>
            <TouchableOpacity style={styles.close} onPress={() => setArticle('')}>
                <Text style={{color: '#FF5555', fontSize: 25}}>X</Text>
            </TouchableOpacity>
            
            <Text style={styles.title}>{article}</Text>

            <View style={styles.explanationWrap}>
                <Image style={styles.image} source={image} />

                <ScrollView style={styles.listWrap}>
                    <View style={styles.list}>
                        {children}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}