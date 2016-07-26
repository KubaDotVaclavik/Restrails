import React, {Component} from 'react'
import {DAYS} from 'strings'
import styles from '../timeline.css'

export default class TimeRuller extends Component {
    constructor(props){
        super(props)
        
        this.onDayClick = this.onDayClick.bind(this)
    }
    
    onDayClick(e){
        const {onDayClick} = this.props
        const el = e.currentTarget
        const date = new Date(parseInt(el.dataset.date))
        const elRect = el.getBoundingClientRect() 
        
        const dayPart = (e.pageY - elRect.top) / elRect.height
        const hour = 24 * (1 - dayPart)
        const minutes = (hour - parseInt(hour)) * 60
        
        date.setHours(hour)
        date.setMinutes(minutes)
        date.setMilliseconds(0)
        
        // TODO otevře mini dialog "spánek / práce"
         onDayClick(date)
    }
    
    render(){
        const {firstDay} = this.props
        let days = [], hours = []
        
        for(var i = 0; i > -7; i--){
            let result = new Date(firstDay)
            result.setDate(result.getDate() + i)
            days.push(result)
        }
        
        for(var i = 5; i > -1; i-- ){
            hours.push(
                <div key={i} className={styles.hourWrapper}>
                {
                    (i !== 0) ? 
                        <div className={styles.hour}>
                        {`${i * 4} : 00`}
                        </div>
                        : ''
                }
                </div>
                
                )
        }
        
        return(
            <div 
            className={styles.timeruler}
            >
                {days.map((date, idx) => 
                    <div key={idx}
                    className={styles.day}
                    data-date={new Date(date).getTime()}
                    onClick={this.onDayClick}>
                    <div className={styles.dayTitle}>{DAYS.en[date.getDay()]}</div>
                    {hours}
                    </div>
                )}
            </div>
        )
    }
    
}
