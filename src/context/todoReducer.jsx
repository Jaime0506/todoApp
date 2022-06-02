export const todoReducer = (state, action) => {
    
    if (action.type === 'add') {
        return [...state, action.payload]
    }

    if (action.type === 'put') {
        return state.map(todo => (
            (todo.id == action.payload.id) ? {...todo, title: action.payload.title, desc: action.payload.desc } : todo
        ))
    }

    if (action.type === 'delete') {
        return state.filter(todo => todo.id !== action.payload)
    }

    return state
}

// export { initialState }