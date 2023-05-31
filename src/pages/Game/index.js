import { Text, View } from 'react-native';
import { Controlers, Tank } from '../../components/index';
import { styles } from './styles';



export default function Game({navigation}) {
    return (
        <View style={styles.game}>
            <View style={styles.field}>
                <Tank />
            </View>

            <Controlers navigation={navigation} />
        </View>
    );
}