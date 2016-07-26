import React from 'react'
import TimeRuler from './TimeRuler'
import {TimeCards} from '../../TimeCards'
import Sliders from './Sliders'
import styles from '../timeline.css'

export default ({firstDay, onDayClick, timeCards, children}) => <div className={styles.timelineContainer}>
    <div className={styles.timerulerContainer}>
        <TimeRuler 
        firstDay={firstDay}
        onDayClick={onDayClick}
        />
    </div>
    
    <div className={styles.timesliderContainer}>
        <Sliders
        firstDay={firstDay}
        timeCards={timeCards}
        />
    </div>
    
    <div style={{order: '3',     flexGrow: '1'}}>
        <TimeCards/>

    </div>
    
    {children}

</div>