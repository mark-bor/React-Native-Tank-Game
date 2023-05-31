import { Image, TouchableOpacity } from 'react-native';
import { styles } from "./styles";



export default function ButtonChooseWepon({wepons, image, setChoose, name}) {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={() => setChoose({...wepons.find(elem => elem.shirtName===name)})}>
            <Image style={styles.image} source={image} />
        </TouchableOpacity>
    );
}