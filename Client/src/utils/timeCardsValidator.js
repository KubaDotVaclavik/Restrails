export const isOutOfDates = (date, ranges = []) => {
    if(!(date instanceof Date)) throw new Error(`Invalid param "date": ${date}, type: ${typeof date}. Expected instance of Date.`)
    if (ranges.length === 0) return true;

    const time = date.getTime()

    if(ranges.find(item => {
        if(!(item.startTime instanceof Date && item.endTime instanceof Date)) throw new Error(`
        Invalid attribute "start" or "end" in ${item}. Expected instance of Date.`)

        const [startTime, endTime] = [item.startTime.getTime(), item.endTime.getTime()] 
        return time >= startTime && time <= endTime
    })){
        return false
    }

    return true
}

export const betweenWhichDates = (date, ranges = []) => {
    if(!(date instanceof Date)) throw new Error(`Invalid param "date": ${date}, type: ${typeof date}. Expected instance of Date.`)
    
    const time = date.getTime()
    const tempRange = {before: null, after: null} 
    const output = {}
    
    if (ranges.length === 0) return output;

    ranges.some(item => {
        if(!(item.startTime instanceof Date && item.endTime instanceof Date)) throw new Error(`
        Invalid attribute "start" or "end" in ${item}. Expected instance of Date.`)

        const [startTime, endTime] = [item.startTime.getTime(), item.endTime.getTime()]

        if(time > endTime && endTime > (output.before || output.before === undefined) ) {
            Object.assign(output, {timeBefore: startTime, itemBefore: item})
        }
        
        if(time < startTime && (startTime < output.after || output.after === undefined) ){
            Object.assign(output, {timeAfter: startTime, itemAfter: item})
        }

        if(time >= startTime && time <= endTime){
            Object.assign(output, {invalid: true, invalidItem: item})
            delete output.timeBefore, output.timeAfter, output.itemBefore, output.itemAfter
            return true
        }
    })

    return output
}