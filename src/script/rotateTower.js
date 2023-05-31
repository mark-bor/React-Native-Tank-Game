export function rotateTowerLeft(theme, setTheme) {
    setTheme({...theme, position: { ...theme.position, towerRotate: theme.position.towerRotate-2}});
}

export function rotateTowerRight(theme, setTheme) {
    setTheme({...theme, position: { ...theme.position, towerRotate: theme.position.towerRotate+2}});
}