
export let themeValues = {
    modernTheme: {
        font: 'Poppins',
        bgColor: 'bg-gradient-to-r from-slate-500 to-slate-800',
        color: 'text-white'
    },
    classicTheme: {
        font: 'Roboto Slab',
        bgColor: 'bg-gradient-to-b from-violet-200 to-pink-200'
    },
    BlueishTheme: {
        font: 'Space Grotesk',
        bgColor: 'bg-gradient-to-r from-cyan-400 to-blue-500',
        color: 'text-black'
    },
}


export const ThemeReducer = (state, action) => {
    switch (action.type) {

        case "MODERN_THEME":
            return {
                ...state,
                theme: themeValues.modernTheme
            }
        case "CLASSIC_THEME":
            return {
                ...state,
                theme: themeValues.classicTheme
            }
        case "NEON_THEME":
            return {
                ...state,
                theme: themeValues.BlueishTheme
            }

        default:
            return state
    }
}