import React from 'react'
import { connect } from 'react-redux'
import TimeCards from './components/TimeCards'

const mapStateToProps = (dispatch, ownProps) => {
  return {
    
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const TimeCardsContainer = connect(mapStateToProps, mapDispatchToProps)(TimeCards)

export default TimeCardsContainer
