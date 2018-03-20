import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import './Graph.css'
import axios from 'axios'

export default class Graph extends Component {
    constructor() {
        super()

        this.state = {
            noScores: false,
            data: {
                labels: ["3/18", "3/18", "3/19", "3/19", "3/20"],
                datasets: [{
                    label: 'Your LPI History',
                    data: [0, 1150, 300, 1650, 1050],
                    backgroundColor: [
                        'rgba(14, 145, 161, 0.1)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(14, 145, 161,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        }
    }

    componentDidMount() {
        axios.get('/api/getScores').then(res => {
            if(res.data.length > 15) {
                res.data.splice(0, res.data.length - 15)
            }
            let scores = []
            let dates = []
            res.data.forEach(x => {
                scores.push(x.score)
                dates.push(`${x.month + 1}/${x.today}`)
            })
            this.setState({
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Your LPI History',
                        data: scores,
                        backgroundColor: [
                            'rgba(14, 145, 161, 0.1)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(14, 145, 161,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            })
            if (scores.length < 2) {
                this.setState({ noScores: true })
            }
        })
    }

    render() {
        // console.log(this.state.data.datasets[0].data)
        // console.log(this.state.data.labels)
        const { noScores } = this.state
        return (
            <div className='graph'>
                {
                    noScores
                        ?
                        <div className='emptyGraphContainer'>
                            <Line data={this.state.data} height={350} width={650} />
                            <div className='graphShadow'>
                                <h3>Play games to fill this graph</h3>
                            </div>
                        </div>
                        :
                        <Line data={this.state.data} height={350} width={650} />
                }

            </div>
        )
    }
}