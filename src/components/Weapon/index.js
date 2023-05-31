import { useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import ButtonChooseWepon from "../ButtonChooseWepon/index";
import { styles } from "./styles";



export default function Weapon({wepons, wepon, ConfirmWepon}) {
    const [choose, setChoose] = useState({...wepon});

    
    return (
        <View style={[styles.section, {height: Dimensions.get('window').height - 100}]}>
            <View style={styles.weponWrap}>
                <View style={styles.imageWrap}>
                    <Image style={styles.image} source={choose.image} />

                    <View style={styles.nameAndcountryWrap}>
                        <Image style={styles.country} source={choose.country} />
                        <Text style={styles.name}>{choose.name}</Text>
                    </View>
                </View>

                <View style={styles.information}>
                    <View style={styles.informationItem}>
                        <Text style={styles.itemName}>Bullets amount</Text>
                        <Text style={styles.itemValue}>{choose.bulletsAmount}</Text>
                    </View>

                    <View style={styles.informationItem}>
                        <Text style={styles.itemName}>Rate of fire</Text>
                        <Text style={styles.itemValue}>{choose.rateOfFire}</Text>
                    </View>

                    <View style={styles.informationItem}>
                        <Text style={styles.itemName}>Recharge speed</Text>
                        <Text style={styles.itemValue}>{choose.rechargeSpeed}</Text>
                    </View>

                    {choose.name!=wepon.name ? <ConfirmWepon choose={choose} /> : null}
                </View>
            </View>             

            <ScrollView 
                style={styles.chooseButtonsScroll} 
                alwaysBounceVertical={false} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.chooseButtons}>
                    {wepons.map((elem, i) => 
                        <ButtonChooseWepon key={i} wepons={wepons} image={elem.image} setChoose={setChoose} name={elem.shirtName} />
                    )}
                </View>
            </ScrollView>
        </View>
    );
}