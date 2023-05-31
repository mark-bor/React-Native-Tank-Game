import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({    
    section: {
        width: '100%',
    },

    weponWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    

    imageWrap: {
        width: 300,
        height: 180,
        marginRight: 'auto',
        marginLeft: 'auto',

        display: 'flex',
        justifyContent: 'space-between',
    },
    
    image: {
        width: '100%',
        height: 114,
    },

    nameAndcountryWrap: {
        height: 30,
        paddingHorizontal: 30,
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
    },

    country: {
        width: 40,
        height: 25,
    },

    name: {
        color: '#F5F5F5',
        fontWeight: 300,
        fontSize: 25,
    },


    information: {
        width: '33%',
        marginTop: 10,
        padding: 5,

        display: 'flex',
        gap: 5,
        
        backgroundColor: '#051937',
        borderRadius: 10,
    },

    informationItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        overflow: 'hidden',
    },

    itemName: {
        width: '60%',
        paddingLeft: 10,

        color: '#051937',
        fontSize: 15,
    },

    itemValue: {
        width: '35%',
        paddingVertical: 3,

        backgroundColor: '#849878',

        textAlign: 'center',
        color: '#051937',
        fontSize: 18,
    },


    chooseButtonsScroll: {
        width: '100%',
        position: 'absolute',
        bottom: 0,

        display: 'flex',
        flexDirection: 'row',
    },

    chooseButtons: {
        width: '100%',
        paddingHorizontal: 10,
        
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
});