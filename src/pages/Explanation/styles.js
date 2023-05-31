import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    wrap: {
        width: '100%',
        height: '100%',
        // padding: 20,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        gap: 5,

        backgroundColor: '#232E3E',
    },
    
    close: {
        position: 'absolute',

        top: 10,
        left: 10,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        textAlign: 'center', 
        color: '#F5F5F5',
    },

    imagesWrap: {
        marginVertical: 20,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 50,
    },

    image: {
        width: 150,
        height: 150,

        borderRadius: 15,
    },
});