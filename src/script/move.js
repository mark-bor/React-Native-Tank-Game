import { Dimensions } from 'react-native';



const endWidth = Dimensions.get('window').width;
const endHeight = Dimensions.get('window').height;

const at = (direction, theme, setTheme) => {
    const {x, y} = theme.position;
    const move = 2;
    
    switch (direction) {
        case '1:30':
            if (y>20 && x<endWidth) {
                setTheme({...theme, position: {...theme.position, x: x+move/2, y: y-move/2}});
            }
            break;

        case '3':
            if (x<endWidth) {
                setTheme({...theme, position: {...theme.position, x: x+move}});
            }
            break;
    
        case '4:30':
            if (x<endWidth && y<endHeight) {
                setTheme({...theme, position: {...theme.position, x: x+move/2, y: y+move/2}});
            }
            break;
    
        case '6':
            if (y<endHeight) {
                setTheme({...theme, position: {...theme.position, y: y+move}});
            }
            break;
    
        case '7:30':
            if (x>0 && y<endHeight) {
                setTheme({...theme, position: {...theme.position, x: x-move/2, y: y+move/2}});
            }
            break;
    
        case '9':
            if (x>0) {
                setTheme({...theme, position: {...theme.position, x: x-move}});
            }
            break;
    
        case '10:30':
            if (y>20 && x>0) {
                setTheme({...theme, position: {...theme.position, x: x-move/2, y: y-move/2}});
            }
            break;
    
        case '12':
            if (y>20) {
                setTheme({...theme, position: {...theme.position, y: y-move}});
            }
            break;
    
        default:
            break;
    }
}


export function moveUp(theme, setTheme) {
    const tankDeg = 0;
    const {tankRotate} = theme.position;
    let direction = '3';
    
    if (tankDeg===tankRotate) {
        direction = '3';
        
    } else if (tankDeg+45===tankRotate || tankDeg+(-315)===tankRotate) {
        direction = '4:30';

    } else if (tankDeg+90===tankRotate || tankDeg+(-270)===tankRotate) {
        direction = '6';

    } else if (tankDeg+135===tankRotate || tankDeg+(-225)===tankRotate) {
        direction = '7:30';

    } else if (tankDeg+180===tankRotate || tankDeg+(-180)===tankRotate) {
        direction = '9';

    } else if (tankDeg+225===tankRotate || tankDeg+(-135)===tankRotate) {
        direction = '10:30';

    } else if (tankDeg+270===tankRotate || tankDeg+(-90)===tankRotate) {
        direction = '12';

    } else if (tankDeg+315===tankRotate || tankDeg+(-45)===tankRotate) {
        direction = '1:30';
    }
    
    at(direction, theme, setTheme);
}

export function moveDown(theme, setTheme) {
    const tankDeg = 0;
    const {tankRotate} = theme.position;
    let direction = '9';

    if (tankDeg===tankRotate) {
        direction = '9';
        
    } else if (tankDeg+45===tankRotate || tankDeg+(-315)===tankRotate) {
        direction = '10:30';

    } else if (tankDeg+90===tankRotate || tankDeg+(-270)===tankRotate) {
        direction = '12';

    } else if (tankDeg+135===tankRotate || tankDeg+(-225)===tankRotate) {
        direction = '1:30';

    } else if (tankDeg+180===tankRotate || tankDeg+(-180)===tankRotate) {
        direction = '3';

    } else if (tankDeg+225===tankRotate || tankDeg+(-135)===tankRotate) {
        direction = '4:30';

    } else if (tankDeg+270===tankRotate || tankDeg+(-90)===tankRotate) {
        direction = '6';

    } else if (tankDeg+315===tankRotate || tankDeg+(-45)===tankRotate) {
        direction = '7:30';
        
    }
    
    at(direction, theme, setTheme);
}