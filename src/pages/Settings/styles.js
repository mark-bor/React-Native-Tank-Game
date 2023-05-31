import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    settings: {
        width: '100%',
        height: '100%',
        padding: 20,

        backgroundColor: '#232E3E',
    },
        
    close: {
        position: 'absolute',

        top: 20,
        left: 20,
        zIndex: 2,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    title: {
        width: '100%',
        marginBottom: 20,
        
        textAlign: 'center',
        color: '#F5F5F5',
        fontWeight: 300,
        fontSize: 25,
        lineHeight: 29,
    },

    section: {
        width: 250,

        marginVertical: 5,
        padding: 15,
        paddingTop: 10,
        paddingBottom: 5,

        backgroundColor: '#051937',
        borderRadius: 12,
    },

    sectionTitle: {        
        color: '#F5F5F5',
        fontWeight: 300,
        fontSize: 19,
        // lineHeight: 19,
    },

    generalSoundControl: {
        height: 40,
        paddingHorizontal: 5,

        backgroundColor: '#051937',
        borderRadius: 12,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
});