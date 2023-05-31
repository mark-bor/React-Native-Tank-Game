import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    explanationArticle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 30,
        
        top: 0,
        zIndex: 5,
        
        backgroundColor: '#232E3E',
    },

    close: {
        position: 'absolute',
        width: 30, 
        height: 30,

        top: 30,
        right: 30,
        zIndex: 6,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    title: {
        marginBottom: 20,

        color: '#FFF85C',
        fontWeight: 300,
        fontSize: 23,
    },
    
    explanationWrap: {
        height: '100%',
        marginTop: 20,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    image: {
        width: 150,
        height: 150,
        marginHorizontal: 40,

        borderRadius: 10,
    },
    
    listWrap: {
        width: '60%',
        height: '100%',
    },
   
    list: {
        display: 'flex',
        gap: 10,
    },
});