import {combineReducers} from 'redux';
import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from './actions';
const {SHOW_ALL} = VisibilityFilters;


function visibilityFilter(state = SHOW_ALL, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch(action.type){
        case ADD_TODO:
            return  [
                    ...state, 
                    {
                        text: action.payload.text,
                        index: action.payload.index,
                        completed: false
                    }
                ];
                
        case TOGGLE_TODO: 
            return state.map((todo, idx) => {
                    if(idx === action.payload.index){
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo;
                });
        default:
            return state;
    }
}
        
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp;