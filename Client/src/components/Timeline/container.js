import React from 'react'
import { connect } from 'react-redux'
import Timeline from './components/Timeline'
import {add} from './actions'

const mapStateToProps = (state) => {
    const firstDay = new Date()
    firstDay.setDate(new Date(state.timeFrame).getDate() + 1)
    
    return {
        firstDay,
        timeCards: state.entities.timeCards
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDayClick: (date) => {
        dispatch(add(date))
    }
  }
}

const TimelineContainer = connect(mapStateToProps, mapDispatchToProps)(Timeline)

export default TimelineContainer
