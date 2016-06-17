import {generateUID} from './utils'

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_TAG = 'ADD_TAG'


export function addItem(data){
    return {
        type: ADD_ITEM,
        payload: Object.assign(
            {}, 
            { uid : generateUID() }, 
            data
            )
    }
}

export function addTag(data){
    return {
        type: ADD_TAG,
        payload: Object.assign(
            {}, 
            { uid : generateUID() }, 
            data
            )
    }
}