export function rotateTankLeft(theme, setTheme) {
    // if (this.degId===0) {
        
        if (theme.position.blockRotation===false) {
            if (theme.position.towerRotate<90) {
                setTheme({...theme, position: {
                    ...theme.position, 
                    tankRotate: theme.position.tankRotate-45,
                    towerRotate: theme.position.towerRotate+45,
                }});
            } 
        } else {
            setTheme({...theme, position: {...theme.position, tankRotate: theme.position.tankRotate-45}});
        }

        // this.degId=1;
        // setTimeout(() => this.degId=0, 200);

        // if (this.tankR%360===0) this.tankDeg = this.tankR;

    // }
}

export function rotateTankRight(theme, setTheme) {
    // if (this.degId===0) {

        if (theme.position.blockRotation===false) {
            if (theme.position.towerRotate>-90) {
                setTheme({...theme, position: {
                    ...theme.position, 
                    tankRotate: theme.position.tankRotate+45,
                    towerRotate: theme.position.towerRotate-45,
                }});
            }
        } else {
            setTheme({...theme, position: {...theme.position, tankRotate: theme.position.tankRotate+45}});
        }
        
        // this.degId=1;
        // setTimeout(() => this.degId=0, 199);

        // if (this.tankR%360===0) this.tankDeg = this.tankR;
        
    // }
}