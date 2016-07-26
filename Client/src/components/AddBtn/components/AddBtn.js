import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../addbtn.css'
import {STATES} from 'strings'

import WorkIcon from 'material-ui/svg-icons/action/work'
import BedIcon from 'material-ui/svg-icons/maps/hotel'
import AddIcon from 'material-ui/svg-icons/content/add'
import {grey100} from 'material-ui/styles/colors';

export default class AddBtn extends Component {
    constructor(props){
        super(props)

        this.state = {
            dialogIsOpen: false,
        }

        this.onClickPlusBtn = this.onClickPlusBtn.bind(this)
        this.onClickAddBtn = this.onClickAddBtn.bind(this)
        this.handleDocumentClick = this.handleDocumentClick.bind(this)
        
    }

    onClickAddBtn(e){
        this.setState({dialogIsOpen : false})
        this.props.addTimeCard(e.currentTarget.dataset.type)
    }

    onClickPlusBtn(){
        this.setState({dialogIsOpen : !this.state.dialogIsOpen})
    }

    handleDocumentClick(e){
        if(this.state.dialogIsOpen && !this.refs.wrapper.contains(e.target)){
            this.setState({dialogIsOpen : false})
        }
    }

    componentWillMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    }

    render(){
        const {dialogIsOpen} = this.state
        const subBtn1Bottom = dialogIsOpen ? 50 : 3
        const subBtn2Bottom = dialogIsOpen ? 95 : 3
        const titleScale = dialogIsOpen ? 'scale(1)' : 'scale(0)'
        const rotateClass = dialogIsOpen ? ' ' + styles.open  : ''
        
        return (
            <div className={styles.plusBtnWrapper}
            ref='wrapper'
            >
                <button 
                    className={styles.plusBtn}
                    onClick={this.onClickPlusBtn}
                    ref='addbtn'
                >
                    <AddIcon color={grey100} className={dialogIsOpen ? styles.open : ''}/>
                </button>
                <button 
                className={styles.subBtn}
                style={{bottom: subBtn1Bottom}}
                onClick={this.onClickAddBtn}
                data-type='work'>
                    <WorkIcon color={grey100}/>
                    <span
                    style={{transform: titleScale}} 
                    className={styles.subBtnTitle}>
                        {STATES.work.en}
                    </span>
                    
                </button>
                <button 
                className={styles.subBtn} 
                style={{bottom: subBtn2Bottom}}
                onClick={this.onClickAddBtn}
                data-type='sleep'>
                    <BedIcon color={grey100}/>
                    <span
                    style={{transform: titleScale}}  
                    className={styles.subBtnTitle}>
                        {STATES.sleep.en}
                    </span>
                </button>
            </div>
        )
    }
}