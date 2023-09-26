export const fadeInLeftVariant = {
    hidden: {
        x: -50,
        opacvity: 0,
    },
    visible: {
        x: 0,
        opacvity: 1,
        
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}


export const fadeInRightVariant = {
    hidden: {
        x: 50,
        opacvity: 0,
    },
    visible: {
        x: 0,
        opacvity: 1,
        
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}


export const fadeInTopVariant = {
    hidden: {
        y: -50,
        opacvity: 0,
    },
    visible: {
        y: 0,
        opacvity: 1,
        
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}


export const fadeBottomVariant = {
    hidden: {
        y: 30,
        opacvity: 0,
    },
    visible: {
        y: 0,
        opacvity: 1,
        
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

export const slideInLeft = {
    hidden: {
        x: '-100vh',
        opacvity: 0,
    },
    visible: {
        x: 0,
        opacvity: 1,
        
        transition: {
            type: 'tween',
            duration: 0.3,
        }
    },
    exit: {
        opacity:0,
        x: '-100vh',
        transition: {
            type: 'tween',
            duration: 0.4,
        }
    }
}