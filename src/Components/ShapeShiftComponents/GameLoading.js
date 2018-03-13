import React, { Component } from 'react';

export default class GameLoading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startTimer: 3,
        }
        this.decreaseTimer = this.decreaseTimer.bind(this)
    }

    componentDidMount(){
            this.intervalID = window.setInterval(this.decreaseTimer, 1200)
    }

    decreaseTimer() {
        if(this.state.startTimer === 0) {
            window.clearInterval(this.intervalID)
            this.props.changeCurrentDisplay('Game')
        } else {
            this.setState({startTimer: this.state.startTimer - 1})
        }
    }

    render() {
        
        return (
            <div className='gameLoading'>
                {this.state.startTimer}
            </div>
        )
    }
}