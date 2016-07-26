import React from 'react'
import { connect } from 'react-redux'
import AddBtn from './components/AddBtn'
import {addAtDefault} from './AddBtnActions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTimeCard: (type) => {
      dispatch(addAtDefault(type))
    }
  }
}

const AddBtnContainer = connect(null, mapDispatchToProps)(AddBtn)

export default AddBtnContainer
