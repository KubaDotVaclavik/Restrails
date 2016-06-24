export const TIME_TICK = 'TIME_TICK'

export function timeTick(){
    return{
        type: TIME_TICK,
        payload: {
            now: Date.now()
        }
    }
}
