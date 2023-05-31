import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({    
    listElement: {
        // min-height: 40px,
        padding: 10,
        
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#051937',
        borderRadius: 10,
    },
    
    imageWrap: {
        width: 30,
        height: 30,

        backgroundColor: '#8FD855',
        borderRadius: 7,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: '70%',
    },

    element_for_explanation_navigation: {
        backgroundColor: '#8FD855',
        borderRadius: 10,        
    },
    element_for_explanation_fire: {
        borderRadius: '50%',
        borderWidth: 3,
        borderColor: '#8FD855',
    },
    
    text: {
        color: '#F5F5F5',
        fontWeight: 300,
        fontSize: 17,
        lineHeight: 23,
    },
});