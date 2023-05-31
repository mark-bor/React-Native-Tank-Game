import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    controlers: {
        width: '100%',
        height: '100%',
    },

    openMenu: {
        position: 'absolute',
        width: 36,
        height: 36,

        top: 5,
        left: 5,
        zIndex: 1,
        opacity: 0.7,    
    },
    openMenuImage: {
        width: '100%',
        height: '100%',
    },

    laser: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 5,
        right: 45,
    },

    blockingRotation: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 5,
        right: 5,
    },

    tankInformation: {
        position: 'absolute',
        width: '40%',

        left: '30%',
        right: '30%',
        bottom: 0,

        // backgroundColor: '#8FD855',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        opacity: 0.5,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    information: {
        position: 'relative',

        borderWidth: 1,
        borderColor: '#616974',
        borderRadius: 7,
        
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mgInformation: {
        width: '50%',

        marginBottom: 5,
        marginLeft: '10%',
    },
    gunInformation: {
        width: '60%',
    },
    
    mgImage: {
        width: 20,
        height: 20,
        marginLeft: 5,
        marginVertical: 3,  
    },
    gunImage: {
        width: 30,
        height: 10,
        marginLeft: 5,
        marginVertical: 3, 
    },

    bulletsQuantity: {
        width: '75%',
        marginLeft: 10,
        
        textAlign: 'center',
    },
    mgBulletsQuantity: {
        color: '#1C8CCC',
        fontSize: 17,
    },
    gunBulletsQuantity: {
        color: '#FF6A00',
        fontSize: 25,
    },
    
    remainder: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,

        backgroundColor: '#8FD855',
        borderRadius: 7,
    },

    controlButtons: {
        position: 'absolute',
        width: 150,
        height: 150,
        bottom: 0,
        zIndex: 1,
        opacity: 0.7,        
    },
    // position_left: { left: 0, },
    // position_right: { right: 0, },
    // position_left_hidden: { height: 0, },
    // position_right_hidden: { height: 100, },

    controlButtonsWrap: {
        width: '100%',
        height: 50,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
    },

    controlButton: {
        position: 'relative',
        width: 50,
        height: 50,
        opacity: 0.5,

        borderRadius: 17,
        backgroundColor: '#8FD855',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        
    },

    arrowImage: {
        width: 35,
        height: 35,
    },

    btn_control_fire: {borderRadius: '50%'},
    btn_control_active: {opacity: 1,},

    fire_____svg_______fire_frome_MG_____svg: {
        position: 'absolute',
        borderRadius: '50%',
        zIndex: 1,
    },
    fire_____svg: {
        width: '100%',
        height: '100%',
    },
    fire_frome_MG_______svg: {
        width: 40,
        height: 40,
    },
    fire_timer________fire_MG_timer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        
        // transform: rotate(-90deg),
        zIndex: 1,
    },
    fir______span: {
        zIndex: 1,
    },
});