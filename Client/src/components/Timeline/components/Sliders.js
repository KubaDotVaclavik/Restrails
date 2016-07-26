import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../timeline.css'

export default class Sliders extends Component {
    constructor(props){
        super(props)
        this.state = {parentNode: {}}
    }
    
    componentDidMount() {
        this.setState({
        parentNode: ReactDOM.findDOMNode(this).parentNode
        });
    }
    
    render(){
        // TODO vypočítat polohu dle rozdíl time
        const {firstDay, timeCards} = this.props
        
        const parentHeight = this.state.parentNode.clientHeight
        const weekTime = 7 * 24 * 60 * 60 * 1000
        const d = new Date(firstDay)
        d.setHours(0,0,0,0);
        const firstTime = d.getTime()
        
        const sliders = timeCards.map((t, i) => {
            return {
                endPosition: (firstTime - t.endTime.getTime()) / weekTime * parentHeight,
                startPosition: (firstTime - t.startTime.getTime()) / weekTime * parentHeight,
                id: t.id
            }
        })
        
        return (
            
            <div className={styles.slidersWrapper}>
            {
                sliders.map(t => <div key={t.id}>
                    <div className={styles.slidersNode} style={{top: t.startPosition}}/>
                    <div className={styles.slidersNode} style={{top: t.endPosition}}/>
                    <div className={styles.slidersEdge} style={{top: t.endPosition, bottom: parentHeight - t.startPosition}} />
                </div>
                )
            }
            </div>
        )
    }
}