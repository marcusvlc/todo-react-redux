import {combineReducers} from 'redux'

const taskReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_TASK':
            return [
                ...state,
              {
                text: action.taskText,
                id: state.length
              }
            ]
            
            break;
        case 'DELETE_TASK':
       state = state.slice()
        for(let i = 0; i < state.length; i++) {
            if(state[i].id === action.taskID) {
               state.splice(i, 1);
               break;
            }
        }
        break;
        default: break;
    
    }

    return state
}

const reducers = combineReducers({
    tasks: taskReducer
})

export default reducers