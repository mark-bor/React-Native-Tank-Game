import { createContext, useState } from 'react';
import { TANKS, MACHINE_GUNS } from '../data/index';



export const ThemeContext = createContext();

export default function Context({children}) {
    const [theme, setTheme] = useState({
        position: {
            x: 0,
            y: 130,
            tankRotate: 0,
            towerRotate: 0,
            blockRotation: false,
        },
        tank: {...TANKS[0]},
        machineGun: {...MACHINE_GUNS[0]}
    });


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}