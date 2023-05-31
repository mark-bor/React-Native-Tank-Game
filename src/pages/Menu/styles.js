import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: '100%',

        backgroundColor: '#232E3E',

        color: '#F5F5F5',
    },

    header: {
        height: 40,
        paddingHorizontal: 20,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 20,

        backgroundColor: '#051937',
    },
    
    footer: {
        position: 'absolute',
        height: 60,
        paddingHorizontal: 1,
        bottom: 0,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
    },
    
    footerButton: {
        width: '25%',
        height: '100%',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#051937',
        borderRadius: 7,
    },
});