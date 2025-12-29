export type initialStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): initialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        // дописать
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any

type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}