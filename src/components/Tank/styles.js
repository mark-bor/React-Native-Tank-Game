import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({    
    tank: {
        position: 'absolute',
        width: 100,
        height: 60,
    
        borderRadius: 7,
        // box-shadow: -1 3 6 -1 rgba(97, 105, 116, 0.3),
        // transition: 0.3s,
        // transition-timing-function: linear,
    
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    rotateTower: {
        width: 45,
        height: 45,
        marginLeft: 10,
        
        borderRadius: '50%',
        /* box-shadow: 0 0 10 rgba(97, 105, 116, 0.7), */
        // transition: 0.3s,
        // transition-timing-function: linear,
    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    
    tower: {
        position: 'absolute',
    },

    weapon: {
        // position: 'absolute',
        width: 57,
        height: 6,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: '85%', 
        // padding: auto 0,
    
        // transform: [
        //     {translateY: -3}
        // ],
        zIndex: 1,
    
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: 'lime'
    },

    bullet: {
        position: 'absolute',
        width: 15,
        width: 15,
        height: 4,
        // margin: auto 0,
        // left: 3000,

        backgroundColor: '#616974',
        borderRadius: '7% 50% 50% 7%',
        /* transform: translateX(3000), */
    },

    laser: {
        width: 5,
        height: '50%',
        marginLeft: '90%',

        backgroundColor: '#8F949C',
    
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    beam: {
        width: 0,
        height: 1,
        marginLeft: '100%',

        backgroundColor: '#FF5555',
    },

    fireSmoke: {
        position: 'absolute',

        left: '105%',
        transform: [
            {rotate: '90deg'}
        ],
    },


    trapdoor: {
        position: 'absolute',
        width: 16,
        height: 16,

        top: '55%',
        left: '45%',

        borderRadius: '50%',
    },


    machineGun: {
        position: 'absolute',
        height: 12,
        left: '67%',
        zIndex: 2,
        
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        width: 35,
        top: '57%',
        // borderWidth: 1,
        // borderColor: 'red',
    },

    mgCartridge: {
        position: 'absolute',
        width: 5,
        height: 2,
        top: '50%',
        left: 12,
        
        backgroundColor: 'gold'
    },
    
    mgBullet: {
        position: 'absolute',
        width: 3,
        height: 2,
        top: '50%',
        left: 17,

        backgroundColor: 'black',
    },
});