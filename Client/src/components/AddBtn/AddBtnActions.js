import fetch from 'isomorphic-fetch'
import uid from 'uid-safe'

import {ADD} from './AddBtnActionTypes'
import {isOutOfDates, betweenWhichDates} from 'utils'

function add(startTime, endTime, type) {
  return {
    type: ADD,
    payload: {
        id: uid.sync(12),
        startTime,
        endTime,
        type
    }
  }
}

export function addAtDefault(type){
    return (dispatch, getState) => {
        const timeCards = getState().entities.timeCards

        const start = new Date()
        const testHours = [24, -24, -48, -72, -96, 16, 8, -8, -16, -32, -40, -48, -56, -64, -80, -88]
        var startBetween
        start.setHours(0,0,0,0)


        switch(type){
            case 'work':
                 start.setHours(8);                                  
                 break;
            case 'sleep':
                start.setHours(22);
                start.setDate(start.getDate() - 1);
                break;
        }

        startBetween = betweenWhichDates(start, timeCards)
        if(startBetween.invalid) {
            var t = testHours.find(h => {
                const tempStart = new Date(start)
                tempStart.setHours(start.getHours() + h)
                return !betweenWhichDates(tempStart, timeCards).invalid
            })

            if(t){
                start.setHours(start.getHours() + t)
                startBetween = betweenWhichDates(start, timeCards)
            }else{
                throw new Error(`Nelze přidat kartu - neni na ni misto v poslednich třech dnech`)
                // dispatch(neniKamPridatKartu())
            }

            // TODO proiterovat poslední (asi) týden 
            // while(betweenWhichDates(start, timeCards).invalid){
            //     start.setHours(start.getHours() + 24)
            // }
        }
        

        //TODO checknout endTime a případně karty zkrátit
        const endTime = new Date(start)
        endTime.setHours(start.getHours() + 9)

        dispatch(add(start, endTime, type))
    }

    
    // {
    //     type: ADD,
    //     payload: {
    //         id: uid.sync(12),
    //         start,
    //         endTime
    //     }
    // }
} 