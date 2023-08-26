export const todoAction = {
    ADD_TODO:"ADD_TODO",
    REMOVE_TODO:"REMOVE_TODO",
    REMOVE_ALL:"DELETE_ALL",
    UPDATE_COMPLETD:"UPDATE_COMPLETED",
    REFRESH:"REFRESH"
}
export const appReducer = (state,{type,payload})=>{
    switch(type){
        case todoAction.ADD_TODO:
            return {...state,todos:payload};
        case todoAction.REMOVE_TODO:
            return {...state,todos:payload};
        case todoAction.UPDATE_COMPLETD:
            return {...state,todos:payload}
        case todoAction.REMOVE_ALL:
            return {...state,todos:[]}
        case todoAction.REFRESH:
            return {...state,todos:payload}
        default:
            return state;
    }
}

